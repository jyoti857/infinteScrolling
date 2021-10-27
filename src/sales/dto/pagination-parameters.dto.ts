import { IsOptional, IsNumber } from 'class-validator' 
import { Transform } from 'class-transformer';
export class PaginationParameters{
  @IsOptional()
  @IsNumber()
  @Transform(({value}) => Number.parseInt(value) )
  limit?: number;
  
  
  @IsOptional()
  @IsNumber()
  @Transform(({value}) => Number.parseInt(value) )
  skip?: number;
}