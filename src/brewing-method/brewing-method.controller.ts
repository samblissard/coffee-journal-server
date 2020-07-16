import { Controller, Get } from '@nestjs/common';
import { BrewingMethodService } from './brewing-method.service';
import { BrewingMethod } from '../database/entities/brewing-method.entity';
import { ApiOperation } from '@nestjs/swagger';

@Controller('brewing-method')
export class BrewingMethodController {
  constructor(private readonly brewingMethodService: BrewingMethodService) {}

  @Get()
  @ApiOperation({ summary: 'Get all brewing methods' })
  async getAllBrewingMethods(): Promise<BrewingMethod[]> {
    return await this.brewingMethodService.findAll();
  }
}
