import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Generated} from 'typeorm';
@Entity()
export class Mysql {
    @PrimaryGeneratedColumn()  //定义自增的主健
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @CreateDateColumn({type: 'timestamp'}) //创建时间
    createTime: Date;
    @Generated() //uuid
    uuid: string;
    @Column()
    desc: string;

}
