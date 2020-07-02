import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from '../database/entities/coffee.entity';
import { Repository, QueryFailedError } from 'typeorm';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  findAll(): Promise<Coffee[]> {
    return this.coffeeRepository.find({ relations: ['tastingNotes'] });
  }

  async create(coffee: Coffee): Promise<Coffee> {
    try {
      return await this.coffeeRepository.save(coffee);
    } catch (err) {
      //TODO: Add error handling
      console.log(err);
    }
  }
}
