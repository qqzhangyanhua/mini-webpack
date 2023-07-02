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

  async findAll(query: { keyWord: string; pageSize: number; page: number }) {
    //z分页
    const condition = {
      skip: (query.page - 1) * query.pageSize,
      take: query.pageSize,
    };
    if (!query.keyWord) {
      const data = await this.mysql.find({ ...condition,order:{id:'DESC'}});
      console.log('data======', data.length);
      const total = await this.mysql.count();
      return {
        data,
        total,
      };
    }
    const data = this.mysql.find({
      where: { name: Like(`%${query.keyWord}%`) },
      ...condition,
      order:{id:'DESC'}
    });
    const total = await this.mysql.count({
      where: { name: Like(`%${query.keyWord}%`) },
    });
    return {
      data,
      total,
    };
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
