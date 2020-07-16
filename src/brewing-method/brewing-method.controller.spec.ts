import { Test, TestingModule } from '@nestjs/testing';
import { BrewingMethodController } from './brewing-method.controller';

describe('BrewingMethod Controller', () => {
  let controller: BrewingMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrewingMethodController],
    }).compile();

    controller = module.get<BrewingMethodController>(BrewingMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
