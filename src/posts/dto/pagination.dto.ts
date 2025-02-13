import { IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  limit: number = 10; // Default limit

  @IsOptional()
  @IsPositive()
  offset: number = 0; // Default offset
}
