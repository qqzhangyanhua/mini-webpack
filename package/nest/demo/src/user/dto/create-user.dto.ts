import { IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  userName: string;
  @IsNotEmpty()
  password: string;
}
export class LoginUserDto {
  @IsNotEmpty()
  userName: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  code: string;
}
