import { CoffeeDTO } from '../../coffee/dto/coffee-dto';
import { ApiProperty } from '@nestjs/swagger';

export class JournalEntryDTO {
  @ApiProperty()
  coffee: CoffeeDTO;
}
