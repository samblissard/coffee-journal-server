import { Injectable } from '@nestjs/common';
import { JournalEntry } from '../database/entities/journal-entry.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CoffeeService } from '../coffee/coffee.service';
import { BrewingMethodService } from '../brewing-method/brewing-method.service';

@Injectable()
export class JournalEntryService {
  constructor(
    @InjectRepository(JournalEntry)
    private readonly journalEntryRepository: Repository<JournalEntry>,
    private readonly coffeeService: CoffeeService,
    private readonly brewingMethodService: BrewingMethodService,
  ) {}

  async create(journalEntry: JournalEntry) {
    let coffeeEntity = journalEntry.coffee.id
      ? await this.coffeeService.findOne(journalEntry.coffee.id)
      : await this.coffeeService.create(journalEntry.coffee);

    journalEntry.coffee = coffeeEntity;
    journalEntry.brewingMethod = await this.brewingMethodService.findOne(
      journalEntry.brewingMethod.description,
    );

    await this.journalEntryRepository.save(journalEntry);
  }
}
