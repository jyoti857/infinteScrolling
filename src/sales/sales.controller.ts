import { Controller, Get, Query } from '@nestjs/common';
import { PaginationParameters } from './dto/pagination-parameters.dto';
import { Sales } from './sales.schema';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService){}
  @Get()
  async getSales(@Query() getSalesParameters: PaginationParameters): Promise<Sales[]>{
    console.log("get sales parameters ---> ", getSalesParameters)
    return this.salesService.getSales(getSalesParameters);
  }

  @Get('count')
  async getSalesCount(){
    return this.salesService.getSalesCount();
  }
}
