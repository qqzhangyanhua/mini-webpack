import { Injectable, Request } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeepPartial, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserService {
  // constructor(
  //   @InjectRepository(User) private UserRepository: Repository<User>,
  // ) {}
  // async create(entity: DeepPartial<User>): Promise<boolean> {
  //   const res = await this.UserRepository.insert(entity);
  //   console.log('res', res);
  //   return true;
  // }
  findAll(@Request() req: any) {
    console.log('req', req);

    return {
      code: 200,
      message: 'success',
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
