import { Injectable } from '@nestjs/common';
import { CreateMysqlDto } from './dto/create-mysql.dto';
import { UpdateMysqlDto } from './dto/update-mysql.dto';
import { Mysql } from './entities/mysql.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
@Injectable()
export class MysqlService {
  constructor(
    @InjectRepository(Mysql) private readonly mysql: Repository<Mysql>,
  ) {}
  create(createMysqlDto: CreateMysqlDto) {
    const data = new Mysql();
    data.name = createMysqlDto.name;
    data.desc = createMysqlDto.desc;
    return this.mysql.save(data);
  }

  findAll(query: { keyWord: string }) {
    if (!query.keyWord) {
      return this.mysql.find();
    }
    return this.mysql.find({ where: { name: Like(`%${query.keyWord}%`) } });
  }

  findOne(id: number) {
    return `This action returns a #${id} mysql`;
  }

  update(id: number, updateMysqlDto: UpdateMysqlDto) {
    return this.mysql.update(id, updateMysqlDto);
  }

  remove(id: number) {
    return this.mysql.delete(id);
  }
}
