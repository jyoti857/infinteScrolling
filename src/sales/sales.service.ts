import { Injectable } from '@nestjs/common';
import { PaginationParameters } from './dto/pagination-parameters.dto';
import { SalesRepository } from './sales.repository';

@Injectable()
export class SalesService {
  constructor(private readonly salesRepository: SalesRepository){}
  async getSales(paginationParameters: PaginationParameters){
    return this.salesRepository.getSales(paginationParameters)
  }
  async getSalesCount(){
    return this.salesRepository.getSalesCount();
  }
}
