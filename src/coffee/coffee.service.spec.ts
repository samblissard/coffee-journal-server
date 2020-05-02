import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeService } from './coffee.service';
import { Repository } from 'typeorm';

describe('CoffeeService', () => {
  let service: CoffeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoffeeService,
        {
          provide: 'CoffeeRepository',
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<CoffeeService>(CoffeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
