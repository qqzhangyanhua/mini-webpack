import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
  Res,
  Session,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto==444444444444444', createUserDto);
    return this.userService.create(createUserDto);
  }
  @Post('login')
  login(@Body() body: LoginUserDto) {
    console.log('body==', body);
    return this.userService.loginUser(body);
  }
  @Get('code')
  createCode(@Request() req, @Res() res, @Session() session) {
    const captcha = svgCaptcha.create({
      size: 4,
      noise: 2,
      width: 150,
      height: 50,
      fontSize: 50,
      color: true,
    });
    session.code = captcha.text;
    res.type('image/svg+xml');
    res.send(captcha.data);
    return {
      code: 200,
      captcha,
    };
  }
  @Post('createCode')
  createUserCode(@Body() body, @Session() session) {
    console.log('body==', body);
    console.log('session==', session);
    if (session.code !== body?.code) {
      return {
        code: 400,
        msg: '验证码错误',
      };
    }
    return {
      code: 200,
      msg: 'success',
      value: body,
    };
  }
  @Get()
  findAll(@Query() req) {
    console.log('req==', req);

    return {
      code: 200,
      msg: 'success123',
      value: req,
    };
    // return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    //ParseIntPipe 用于转换参数类型
    console.log('id==========', typeof id);
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
