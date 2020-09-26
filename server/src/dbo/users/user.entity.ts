import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 255 })
    username:string;
    
    @Column({ length: 255 })
    password:string;

    @Column() 
    isActive:boolean;
}