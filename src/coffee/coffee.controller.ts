import { Controller, Get, Body, Post } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import {
  mapCoffeeToCoffeeDTO,
  mapCoffeeDTOToCoffee,
} from './mappers/coffee-mappers';
import { CoffeeDTO } from './dto/coffee-dto';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiProperty,
} from '@nestjs/swagger';

@ApiTags('coffee')
@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @ApiOperation({ summary: 'Get all coffee' })
  @Get()
  async findAll(): Promise<CoffeeDTO[]> {
    const coffeeEntities = await this.coffeeService.findAll();
    return coffeeEntities.map(coffee => mapCoffeeToCoffeeDTO(coffee));
  }

  @ApiOperation({ summary: 'Create coffee' })
  @ApiResponse({ status: 201, description: 'Created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  async create(@Body() coffee: CoffeeDTO) {
    const coffeeEntity = mapCoffeeDTOToCoffee(coffee);
    await this.coffeeService.create(coffeeEntity);
  }
}
