import {
  ConflictException,
  Injectable,
  Request,
  Session,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeepPartial, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async findUserByUsername(userName: string): Promise<User | undefined> {
    const from = await this.user.findOne({
      where: { userName: userName },
    });
    return from;
  }
  async create(createUserDto: CreateUserDto) {
    const form = await this.findUserByUsername(createUserDto.userName);
    if (form) {
      throw new ConflictException('用户名已存在');
    }
    const data = new User();
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    data.userName = createUserDto.userName;
    data.password = hashedPassword;
    this.user.save(data);
    return '新增成功!';
  }
  async loginUser(body: LoginUserDto) {
    const { userName, password } = body;
    const from = await this.findUserByUsername(userName);
    if (!from) {
      throw new UnauthorizedException('用户名不存在');
    }
    const isPasswordValid = await bcrypt.compare(password, from.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('密码错误');
    }
    const token = this.jwtService.sign({ id: from.id });
    return token;
  }
  async verifyCode(session, body) {
    console.log('session===========', session.code, body);
    if (!session.code) {
      throw new UnauthorizedException('验证码错误');
    }
    if (session?.code.toLocaleLowerCase() !== body?.code.toLocaleLowerCase()) {
      return false;
    }
    return true;
  }
  findAll(@Request() req: any) {
    console.log('req', req);

    return {
      code: 200,
      message: 'success',
      data: '123',
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
