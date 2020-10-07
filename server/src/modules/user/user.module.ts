import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../../services/user/user.service';
import { UsersController } from '../../controllers/user/user.controller';
import { User } from '../../dbo/users/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), JwtModule.register({
    secret: 'jwtConstants.secret',
    signOptions: { expiresIn: '60s' },
  })
],
  providers: [UsersService],
  controllers: [UsersController],
})

export class UserModule { }