import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../../services/user/user.service';
import { UsersController } from '../../controllers/user/user.controller';
import { User } from '../../dbo/users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})

export class UserModule { }