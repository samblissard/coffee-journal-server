import { Test, TestingModule } from '@nestjs/testing';
import { JournalEntryController } from './journal-entry.controller';
import { JournalEntryService } from './journal-entry.service';
import { Repository } from 'typeorm';

describe('JournalEntry Controller', () => {
  let controller: JournalEntryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JournalEntryController],
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

    controller = module.get<JournalEntryController>(JournalEntryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
