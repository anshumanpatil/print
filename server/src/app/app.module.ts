import { Module } from '@nestjs/common';
import { ProductModule } from '../modules/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://anshumanpradippatil1506:yajju1506@ds149998.mlab.com:49998/nivalocal'),
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
