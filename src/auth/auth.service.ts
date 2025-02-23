import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { RegistrationDto } from 'src/dto/registration.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
      message: 'User logged in successfully',
    };
  }

  async register(registrationDto: RegistrationDto) {
    return this.usersService.createUser(registrationDto);
  }

  async getUser(email: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (user) {
      return {
        data: user,
        status: 200,
        message: 'User Retrieved Successfully',
      };
    }
    return null;
  }
}
