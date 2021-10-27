import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesController } from './sales/sales.controller';
import { SalesService } from './sales/sales.service';
import {MongooseModule} from '@nestjs/mongoose'
import { SalesModule } from './sales/sales.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/sample_supplies'),
    SalesModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
