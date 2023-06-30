import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    comment: '姓名',
    default: '',
  })
  @IsNotEmpty({ message: '姓名不能为空' })
  name: string;
  @Column({
    comment: '描述信息',
    default: '',
  })
  desc: string;
  @Column({
    comment: '手机号',
    nullable: true,
  })
  tel: string;
  @Column({
    comment: '密码',
    nullable: true,
  })
  password: string;
  @Column({
    comment: '账户信息',
    nullable: true,
  })
  account: string;
}
