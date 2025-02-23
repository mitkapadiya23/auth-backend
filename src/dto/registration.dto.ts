import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class RegistrationDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The full name of the user',
  })
  @IsNotEmpty({ message: 'Fullname is required' })
  fullName: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'User email address',
  })
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @ApiProperty({
    example: 'category 1',
    description: 'The category of the user',
  })
  @IsNotEmpty({ message: 'Category is required' })
  category: string;

  @ApiProperty({
    example: '1234567890',
    description: 'Contact number of the user',
  })
  @IsNotEmpty({ message: 'Contact is required' })
  contact: string;

  @ApiProperty({
    example: 'password123',
    description: 'User password',
    minLength: 6,
  })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}
