import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegistrationDto } from 'src/dto/registration.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async createUser(registrationDto: RegistrationDto) {
    const hashedPassword = await bcrypt.hash(registrationDto.password, 10);
    return this.prisma.user.create({
      data: {
        userName: registrationDto.userName,
        email: registrationDto.email,
        category: registrationDto.category,
        contact: registrationDto.contact,
        password: hashedPassword,
      },
    });
  }
}
