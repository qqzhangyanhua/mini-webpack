import { Injectable } from '@nestjs/common';
import { CreateMysqlDto } from './dto/create-mysql.dto';
import { UpdateMysqlDto } from './dto/update-mysql.dto';
import { Mysql } from './entities/mysql.entity';
import { Tags } from './entities/tags.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
@Injectable()
export class MysqlService {
  constructor(
    @InjectRepository(Mysql) private readonly mysql: Repository<Mysql>,
    @InjectRepository(Tags) private readonly tags: Repository<Tags>,
  ) {}
  create(createMysqlDto: CreateMysqlDto) {
    const data = new Mysql();
    data.name = createMysqlDto.name;
    data.desc = createMysqlDto.desc;
    return this.mysql.save(data);
  }

  async findAll(query: { keyWord: string; pageSize: number; page: number }) {
    //z分页
    const page = query.page || 1;
    const pageSize = query.pageSize || 10;
    const condition = {
      skip: (page - 1) * pageSize,
      take: pageSize,
      relations: ['tags'],
    };
    if (!query.keyWord) {
      const data = await this.mysql.find({
        ...condition,
        order: { id: 'DESC' },
      });
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
      order: { id: 'DESC' },
    });
    const total = await this.mysql.count({
      where: { name: Like(`%${query.keyWord}%`) },
    });
    return {
      data,
      total,
      code: 200,
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
  async addTags(body: { tags: string[]; userId: number }) {
    const userInfo = await this.mysql.findOne({
      where: { id: body.userId },
    });
    for (let i = 0; i < body.tags.length; i++) {
      const tag = new Tags();
      tag.name = body.tags[i];
      tag.user = userInfo;
      await this.tags.save(tag);
    }
    userInfo.tags = [];
    console.log('11111111', userInfo);

    return true;
  }
}
