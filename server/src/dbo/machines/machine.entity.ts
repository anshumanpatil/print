import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Machine {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 255 })
    name: string;

    @Column()
    isActive: boolean;

}
