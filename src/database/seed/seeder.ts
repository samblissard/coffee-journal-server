import { Injectable } from '@nestjs/common';
import { BrewingMethod } from '../entities/brewing-method.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BrewingMethodService } from '../../brewing-method/brewing-method.service';

@Injectable()
export class Seeder {
  constructor(private readonly brewingMethodService: BrewingMethodService) {}

  async seed() {
    console.log('seed!');
    await this.seedBrewingMethods();
  }

  async seedBrewingMethods() {
    const brewingMethods = [
      'V60',
      'French Press',
      'Chemex',
      'Cold Brew',
      'Japanese Iced Coffee',
    ];
    console.log('seeding brewing methods');
    return await Promise.all(
      brewingMethods.map(method => this.brewingMethodService.create(method)),
    );
  }
}
