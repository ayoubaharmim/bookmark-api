import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  signIn() {
    return 'This is Sign in';
  }

  async signUp(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    try {
      return await this.prismaService.user.create({
        data: {
          email: dto.email,
          hash,
        },
        select: { email: true, createdAt: true },
      });
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new ForbiddenException('Credentials have been already taken');
        }
      }
      throw e;
    }
  }
}
