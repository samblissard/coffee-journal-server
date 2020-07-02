import { Controller, Post, Body } from '@nestjs/common';
import { JournalEntryService } from './journal-entry.service';
import { JournalEntry } from '../database/entities/journal-entry.entity';

@Controller('journal-entry')
export class JournalEntryController {
  constructor(private readonly journalEntryService: JournalEntryService) {}

  @Post()
  async create(@Body() journalEntry: JournalEntry) {
    await this.journalEntryService.create(journalEntry);
  }
}
