import { Test, TestingModule } from '@nestjs/testing';
import { BrewingMethodService } from './brewing-method.service';

describe('BrewingMethodService', () => {
  let service: BrewingMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrewingMethodService],
    }).compile();

    service = module.get<BrewingMethodService>(BrewingMethodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
