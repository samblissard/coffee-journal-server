import { Controller, Get, Body, Post } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { Coffee } from 'src/database/entities/coffee.entity';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  async findAll(): Promise<Coffee[]> {
    return await this.coffeeService.findAll();
  }

  @Post()
  async create(@Body() coffee: Coffee) {
    await this.coffeeService.create(coffee);
  }
}
