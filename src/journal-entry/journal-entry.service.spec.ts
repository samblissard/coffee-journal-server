import { Test, TestingModule } from '@nestjs/testing';
import { JournalEntryService } from './journal-entry.service';
import { Repository } from 'typeorm';

describe('JournalEntryService', () => {
  let service: JournalEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JournalEntryService,
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

    service = module.get<JournalEntryService>(JournalEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
