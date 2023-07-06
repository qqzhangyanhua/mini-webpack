import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
export class CreateLoginDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 10, {
    message: '用户名长度不对',
  })
  name: string;
  @IsNotEmpty()
  @IsNumber()
  age: number;
}
export class SendMsgDto {
  @IsNotEmpty()
  @IsString()
  @Length(11, 12, {
    message: '手机号码长度不对',
  })
  iphone: string;
}
