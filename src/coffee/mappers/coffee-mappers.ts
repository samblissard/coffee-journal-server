import { Coffee } from '../../database/entities/coffee.entity';
import { CoffeeDTO } from '../dto/coffee-dto';
import { TastingNote } from '../../database/entities/tasting-note.entity';

export function mapCoffeeToCoffeeDTO(coffee: Coffee): CoffeeDTO {
  return {
    id: coffee.id,
    name: coffee.name,
    roaster: coffee.roaster,
    roast: coffee.roast,
    tastingNotes: coffee.tastingNotes.map(descriptor => descriptor.description),
  };
}

export function mapCoffeeDTOToCoffee(dto: CoffeeDTO): Coffee {
  const coffee = new Coffee();
  coffee.id = dto.id;
  coffee.name = dto.name;
  coffee.roaster = dto.roaster;
  coffee.roast = dto.roast;
  coffee.tastingNotes = dto.tastingNotes.map(tn => new TastingNote(tn));
  return coffee;
}
