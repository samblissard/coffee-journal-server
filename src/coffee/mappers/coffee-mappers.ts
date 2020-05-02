import { Coffee } from '../../database/entities/coffee.entity';
import { CoffeePreviewDTO } from '../dto/coffee-preview-dto';

export function mapCoffeeToCoffeePreviewDTO(coffee: Coffee): CoffeePreviewDTO {
  return {
    id: coffee.id,
    name: coffee.name,
    roaster: coffee.company,
    roast: 'Dark roast',
    tastingNotes: coffee.descriptors.map(descriptor => descriptor.description),
  };
}
