import { Injectable } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose'
import { Sales } from "./sales.schema";
import {Model} from 'mongoose'
import { PaginationParameters } from "./dto/pagination-parameters.dto";
@Injectable()
export class SalesRepository{
  constructor(@InjectModel(Sales.name) private readonly salesModel: Model<Sales>){}

  async getSales(paginationParameters: PaginationParameters): Promise<Sales[]>{
    console.log("pagination parameters", {...paginationParameters})
    return this.salesModel.find({}, {}, {
      lean: true,
      sort: {
        saleDate: -1
      },
      ...paginationParameters
    })
  }

  async getSalesCount(): Promise<number>{
    return this.salesModel.count({});
  }
}