import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signIn() {
    return 'This is Sign in';
  }

  signUp() {
    return 'This is sign up';
  }
}
