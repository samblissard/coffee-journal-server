import { IsNotEmpty, IsNotEmptyObject, IsDefined } from 'class-validator';

export class CoffeeDTO {
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  roaster: string;

  @IsNotEmpty()
  roast: string;

  @IsDefined()
  tastingNotes: string[];
}
