import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class RegistrationDto {
  @IsNotEmpty({ message: 'Fullname is required' })
  fullName: string;

  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsNotEmpty({ message: 'Category is required' })
  category: string;

  @IsNotEmpty({ message: 'Contact is required' })
  contact: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}
