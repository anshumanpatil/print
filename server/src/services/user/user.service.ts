import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../dbo/users/user.entity';
import * as bcrypt from "bcryptjs";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>, private jwtService: JwtService) { }

    async getUsers(user: User): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(user: User): Promise<any> {
        return await this.usersRepository.findOne({
            where: { "username": user['username'], "password": user['password'] }
        });
    }

    async login(user: User): Promise<any> {
        const Protector = (username, password) => new Promise((resolve, reject) => bcrypt.compare(username, password, (err, hash) => { err ? reject(err) : resolve(hash) }));

        const selectedUsername = await this.usersRepository.findOne({
            select: ["password"],
            where: [{ "username": user['username'] }]
        });

        if (selectedUsername) {
            return bcrypt.compare(selectedUsername['password'], user['password'])
                .then(async (hashOk) => {
                    if (hashOk) {
                        return await this.usersRepository.findOne({
                            select: ["id"],
                            where: [{ "username": user['username'] }]
                        })
                    } else {
                        return Promise.reject({ "error": "Password missmatch!" })
                    }
                }).then(user => {
                    const token = this.jwtService.sign({ 'id': user['id'] });
                    user['token'] = token;
                    return { token };
                }).catch(err => { return { 'err': 'err' } });
        } else {
            return Promise.reject({ "error": "User not Found!" });
        }

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