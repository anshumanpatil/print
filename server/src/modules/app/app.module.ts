import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from '../../controllers/app/app.controller';
import { AppService } from '../../services/app/app.service';

import { UserModule } from '../../modules/user/user.module';
import { ProductsModule } from '../products/products.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://anshumanpradippatil1506:yajju1506@ds149998.mlab.com:49998/nivalocal'),
    TypeOrmModule.forRoot(),
    UserModule,
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
