import { Controller, Get, Body, Post } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { Coffee } from '../database/entities/coffee.entity';
import {
  mapCoffeeToCoffeeDTO,
  mapCoffeeDTOToCoffee,
} from './mappers/coffee-mappers';
import { CoffeeDTO } from './dto/coffee-dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  async findAll(): Promise<CoffeeDTO[]> {
    const coffeeEntities = await this.coffeeService.findAll();
    return coffeeEntities.map(coffee => mapCoffeeToCoffeeDTO(coffee));
  }

  @Post()
  async create(@Body() coffee: CoffeeDTO) {
    const coffeeEntity = mapCoffeeDTOToCoffee(coffee);
    await this.coffeeService.create(coffeeEntity);
  }
}
