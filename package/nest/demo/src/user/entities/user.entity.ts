import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    comment: '姓名',
    default: '',
    nullable: true,
  })
  @IsNotEmpty({ message: '姓名不能为空' })
  userName: string;
  @Column({
    comment: '密码',
    nullable: true,
  })
  password: string;
}
