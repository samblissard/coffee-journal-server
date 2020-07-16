import { Test, TestingModule } from '@nestjs/testing';
import { BrewingMethodService } from './brewing-method.service';
import { Repository, getRepository } from 'typeorm';
import { BrewingMethod } from '../database/entities/brewing-method.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('BrewingMethodService', () => {
  let service: BrewingMethodService;
  let repository: Repository<BrewingMethod>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BrewingMethodService,
        {
          provide: getRepositoryToken(BrewingMethod),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<BrewingMethodService>(BrewingMethodService);
    repository = module.get<Repository<BrewingMethod>>(
      getRepositoryToken(BrewingMethod),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should not save the brewing method if it already exists', async () => {
      jest
        .spyOn(repository, 'findOne')
        .mockResolvedValueOnce(new BrewingMethod('hello'));

      jest
        .spyOn(repository, 'save')
        .mockResolvedValueOnce(new BrewingMethod('hello'));

      service.create('hello');

      expect(repository.save).not.toHaveBeenCalledWith(
        expect.any(BrewingMethod),
      );
    });

    it('should save the brewing method if it does not exist', async () => {
      jest.spyOn(repository, 'findOne').mockResolvedValueOnce(null);

      jest
        .spyOn(repository, 'save')
        .mockResolvedValueOnce(new BrewingMethod('hello'));

      await service.create('hello');

      expect(repository.save).toHaveBeenCalledWith(expect.any(BrewingMethod));
    });
  });
});
