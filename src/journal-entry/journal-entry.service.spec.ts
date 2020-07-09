import { Test, TestingModule } from '@nestjs/testing';
import { JournalEntryService } from './journal-entry.service';
import { CoffeeService } from '../coffee/coffee.service';
import { JournalEntry } from '../database/entities/journal-entry.entity';
import { Coffee } from '../database/entities/coffee.entity';
import { mockRepository } from '../test-utils';

describe('JournalEntryService', () => {
  let service: JournalEntryService;
  let mockCoffeeService: CoffeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JournalEntryService,
        {
          provide: 'JournalEntryRepository',
          useClass: mockRepository,
        },
        {
          provide: 'CoffeeRepository',
          useClass: mockRepository,
        },
        {
          provide: CoffeeService,
          useValue: {
            findOne: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<JournalEntryService>(JournalEntryService);
    mockCoffeeService = module.get<CoffeeService>(CoffeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should find existing coffee given coffee ID', async () => {
      const journalEntryCoffee = new Coffee();
      journalEntryCoffee.id = 1;

      const journalEntry = new JournalEntry();
      journalEntry.coffee = journalEntryCoffee;

      await service.create(journalEntry);
      expect(mockCoffeeService.findOne).toHaveBeenCalledWith(1);
    });

    it('should create new coffee given coffee ID of 0', async () => {
      const journalEntryCoffee = new Coffee();
      journalEntryCoffee.id = 0;

      const journalEntry = new JournalEntry();
      journalEntry.coffee = journalEntryCoffee;

      await service.create(journalEntry);
      expect(mockCoffeeService.create).toHaveBeenCalledWith(
        journalEntry.coffee,
      );
    });

    it('should create new coffee given coffee without ID', async () => {
      const journalEntryCoffee = new Coffee();
      const journalEntry = new JournalEntry();
      journalEntry.coffee = journalEntryCoffee;

      await service.create(journalEntry);
      expect(mockCoffeeService.create).toHaveBeenCalledWith(
        journalEntry.coffee,
      );
    });
  });
});
