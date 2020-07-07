import { Coffee } from '../../database/entities/coffee.entity';
import { CoffeePreviewDTO } from '../dto/coffee-preview-dto';

export function mapCoffeeToCoffeePreviewDTO(coffee: Coffee): CoffeePreviewDTO {
  return {
    id: coffee.id,
    name: coffee.name,
    roaster: coffee.roaster,
    roast: coffee.roast,
    tastingNotes: coffee.tastingNotes.map(descriptor => descriptor.description),
  };
}
