import { Controller, Get, Body, Post } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { Coffee } from '../database/entities/coffee.entity';
import { mapCoffeeToCoffeePreviewDTO } from './mappers/coffee-mappers';
import { CoffeePreviewDTO } from './dto/coffee-preview-dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  async findAll(): Promise<CoffeePreviewDTO[]> {
    const coffeeEntities = await this.coffeeService.findAll();
    return coffeeEntities.map(coffee => mapCoffeeToCoffeePreviewDTO(coffee));
  }

  @Post()
  async create(@Body() coffee: Coffee) {
    await this.coffeeService.create(coffee);
  }
}
