import { Module, ConsoleLogger } from '@nestjs/common';
import { NameUser } from './models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([NameUser])],
  providers: [ConsoleLogger],
})
export class NameUserMOdule {}
