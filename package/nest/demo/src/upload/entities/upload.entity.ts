import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
@Entity()
export class Upload {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    url: string;
    @Column()
    size: number;
    @Column()
    type: string;

}
