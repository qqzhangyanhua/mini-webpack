import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Mysql } from './mysql.entity';
@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @ManyToOne(() => Mysql)
  user: Mysql;
}
