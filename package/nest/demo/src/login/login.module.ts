import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { JwtModule } from '@nestjs/jwt';
@Module({
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
