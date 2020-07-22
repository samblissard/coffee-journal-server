import { CoffeeDTO } from '../../coffee/dto/coffee-dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class JournalEntryDTO {
  @ApiProperty()
  coffee: CoffeeDTO;

  @ApiProperty()
  @IsNotEmpty()
  brewingMethod: string;

  @ApiProperty()
  @IsNotEmpty()
  coffeeWeight: number;

  @ApiProperty()
  @IsNotEmpty()
  waterWeight: number;

  @ApiProperty()
  @IsNotEmpty()
  grindSetting: number;
}
