import { Test, TestingModule } from '@nestjs/testing';
import { JournalEntryController } from './journal-entry.controller';
import { JournalEntryService } from './journal-entry.service';
import { Repository } from 'typeorm';
import { CoffeeService } from '../coffee/coffee.service';
import { JournalEntryDTO } from './dto/journal-entry-dto';
import { JournalEntry } from '../database/entities/journal-entry.entity';

describe('JournalEntry Controller', () => {
  let controller: JournalEntryController;
  let mockJournalEntryService: JournalEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JournalEntryController],
      providers: [
        {
          provide: JournalEntryService,
          useValue: {
            create: jest.fn(),
          },
        },
        CoffeeService,
        {
          provide: 'JournalEntryRepository',
          useClass: Repository,
        },
        {
          provide: 'CoffeeRepository',
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<JournalEntryController>(JournalEntryController);
    mockJournalEntryService = module.get<JournalEntryService>(
      JournalEntryService,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call JournalEntryService create with mapped entity', async () => {
      const dto: JournalEntryDTO = {
        coffee: {
          id: 0,
          name: 'someName',
          roast: 'someRoast',
          roaster: 'someRoaster',
          tastingNotes: [],
        },
        brewingMethod: 'someBrewingMethod',
        coffeeWeight: 1,
        waterWeight: 1,
        grindSetting: 1,
      };

      await controller.create(dto);

      expect(mockJournalEntryService.create).toHaveBeenCalledWith(
        expect.any(JournalEntry),
      );
    });
  });
});
