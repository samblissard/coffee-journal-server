import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeController } from './coffee.controller';
import { Repository } from 'typeorm';
import { CoffeeService } from './coffee.service';
import { CoffeeDTO } from './dto/coffee-dto';

describe('Coffee Controller', () => {
  let controller: CoffeeController;
  let mockCoffeeService: CoffeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeeController],
      providers: [
        {
          provide: CoffeeService,
          useValue: {
            create: jest.fn(),
          },
        },
        {
          provide: 'CoffeeRepository',
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<CoffeeController>(CoffeeController);
    mockCoffeeService = module.get<CoffeeService>(CoffeeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call CoffeeService create', async () => {
      const dto = new CoffeeDTO();

      await controller.create(dto);

      expect(mockCoffeeService.create).toHaveBeenCalled();
    });
  });
});
