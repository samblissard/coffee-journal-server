import { IsNotEmpty, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CoffeeDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  roaster: string;

  @ApiProperty()
  @IsNotEmpty()
  roast: string;

  @ApiProperty()
  @IsDefined()
  tastingNotes: string[];
}
