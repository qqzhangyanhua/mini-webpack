import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NameUser } from './models/user.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(NameUser) private UserRepository: Repository<NameUser>,
  ) {}
  async create(entity: DeepPartial<NameUser>): Promise<boolean> {
    const res = await this.UserRepository.insert(entity);
    console.log('res', res);
    return true;
  }
}
