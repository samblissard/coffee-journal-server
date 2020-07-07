import { Injectable } from '@nestjs/common';
import { JournalEntry } from '../database/entities/journal-entry.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CoffeeService } from '../coffee/coffee.service';

@Injectable()
export class JournalEntryService {
  constructor(
    @InjectRepository(JournalEntry)
    private readonly journalEntryRepository: Repository<JournalEntry>,
    private readonly coffeeService: CoffeeService,
  ) {}

  async create(journalEntry: JournalEntry) {
    let newJournalEntry = new JournalEntry();
    let coffeeEntity = journalEntry.coffee.id
      ? await this.coffeeService.findOne(journalEntry.coffee.id)
      : await this.coffeeService.create(journalEntry.coffee);
    newJournalEntry.coffee = coffeeEntity;
    await this.journalEntryRepository.save(newJournalEntry);
  }
}
