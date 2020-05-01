import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from 'src/database/entities/coffee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  findAll(): Promise<Coffee[]> {
    return this.coffeeRepository.find({ relations: ['descriptors'] });
  }
  async create(coffee: Coffee) {
    await this.coffeeRepository.save(coffee);
  }
}
