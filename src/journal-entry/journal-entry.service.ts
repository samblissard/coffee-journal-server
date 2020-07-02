import { Injectable } from '@nestjs/common';
import { JournalEntry } from '../database/entities/journal-entry.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from '../database/entities/coffee.entity';

@Injectable()
export class JournalEntryService {
  constructor(
    @InjectRepository(JournalEntry)
    private readonly journalEntryRepository: Repository<JournalEntry>,
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}
  async create(journalEntry: JournalEntry) {
    let newJournalEntry = new JournalEntry();
    let newCoffee = await this.coffeeRepository.save(journalEntry.coffee);
    newJournalEntry.coffee = newCoffee;
    await this.journalEntryRepository.save(newJournalEntry);
  }
}
