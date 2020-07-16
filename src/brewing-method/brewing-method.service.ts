import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrewingMethod } from '../database/entities/brewing-method.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrewingMethodService {
  constructor(
    @InjectRepository(BrewingMethod)
    private readonly brewingMethodRepository: Repository<BrewingMethod>,
  ) {}

  async create(description: string) {
    const existingBrewingMethod = await this.brewingMethodRepository.findOne({
      where: {
        description: description,
      },
    });

    if (!existingBrewingMethod) {
      await this.brewingMethodRepository.save(new BrewingMethod(description));
    }
  }
}
