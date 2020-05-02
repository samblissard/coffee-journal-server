import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeController } from './coffee.controller';
import { Repository } from 'typeorm';
import { CoffeeService } from './coffee.service';

describe('Coffee Controller', () => {
  let controller: CoffeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeeController],
      providers: [
        CoffeeService,
        {
          provide: 'CoffeeRepository',
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<CoffeeController>(CoffeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
