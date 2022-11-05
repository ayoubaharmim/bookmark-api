import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  signIn() {
    return 'This is Sign in';
  }

  signUp() {
    return 'This is sign up';
  }
}
