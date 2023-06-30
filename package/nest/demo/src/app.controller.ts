import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './modules/user/user.service';
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('admin')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/create')
  async create(): Promise<boolean> {
    return await this.userService.create({
      name: '管理员',
      desc: '管理员',
      tel: '132222222222',
      password: '1233333',
      account: '111',
    });
  }
}
