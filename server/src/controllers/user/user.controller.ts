import { Controller, Post, Body, Get, Put, Delete, Param, HttpCode } from '@nestjs/common';
import { UsersService } from '../../services/user/user.service';
import { User } from '../../dbo/users/user.entity';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() user: User) {
        return this.service.createUser(user);
    }

    @HttpCode(200)
    @Post('login')
    login(@Body() user: any) {
        let __user = user;
        if (user.hasOwnProperty('body')) {
            __user = user.body;
        }
        return this.service.login(__user);
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}