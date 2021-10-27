import {Module} from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import {MongooseModule} from '@nestjs/mongoose'
import { Sales, SalesSchema } from './sales.schema';
import { SalesRepository } from './sales.repository';
@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Sales.name,
      schema: SalesSchema
    }
  ])],
  providers: [SalesService, SalesRepository],
  controllers:[SalesController],
  exports: [SalesService]

})
export class SalesModule{};