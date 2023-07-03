import { Module } from '@nestjs/common';
import { MysqlService } from './mysql.service';
import { MysqlController } from './mysql.controller';
import { Mysql } from './entities/mysql.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tags } from './entities/tags.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Mysql, Tags])],
  controllers: [MysqlController],
  providers: [MysqlService],
})
export class MysqlModule {}
