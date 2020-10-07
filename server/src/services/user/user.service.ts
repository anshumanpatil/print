import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../dbo/users/user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async getUsers(user: User): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(user: User): Promise<User> {
        return await this.usersRepository.findOne({
            where: { "username": user['username'], "password": user['password'] }
        });
    }

    async login(user: User): Promise<User> {
        return await this.usersRepository.findOneOrFail({
            select: ["id", "isActive"],
            where: [{ "username": user['username'], "password": user['password'] }]
        });
    }

    async createUser(user: User) {
        this.usersRepository.save(user)
    }

    async updateUser(user: User) {
        this.usersRepository.save(user)
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }
}