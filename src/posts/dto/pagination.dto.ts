import { IsOptional, IsDecimal } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsDecimal()
  limit: number = 10; // Default limit

  @IsOptional()
  @IsDecimal()
  offset: number = 0; // Default offset
}
