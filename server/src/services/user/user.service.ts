import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../dbo/users/user.entity';
import * as bcrypt from "bcryptjs";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name);
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
        this.logger.log("User Body", JSON.stringify(user));
        console.log("user", user);



        return new Promise(async (r, b) => {
            const selectedUsername = await this.usersRepository.findOne({
                select: ["password"],
                where: [{ "username": user['username'] }]
            });

            console.log("selectedUsername", selectedUsername);

            if (selectedUsername) {
                bcrypt.compare(selectedUsername['password'], user['password'])
                    .then(async (hashOk) => {
                        console.log("hashOk", hashOk);
                        if (hashOk) {
                            return await this.usersRepository.findOne({
                                select: ["id"],
                                where: [{ "username": user['username'] }]
                            })
                        } else {
                            b({ "error": "Password missmatch!" })
                        }
                    }).then(user => {
                        if(user){
                            console.log("final user", user);
                            const token = this.jwtService.sign({ 'id': user['id'] });
                            user['token'] = token;
                            r({ token });
                        }
                    }).catch(err => { b(err) });
            } else {
                b({ "error": "User not Found!" });
            }
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