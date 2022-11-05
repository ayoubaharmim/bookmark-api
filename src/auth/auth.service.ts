import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';

@Injectable({})
export class AuthService {
  signIn() {
    return 'This is Sign in';
  }

  signUp() {
    return 'This is sign up';
  }
}
