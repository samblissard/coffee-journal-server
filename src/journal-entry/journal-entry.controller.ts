import { Controller, Post, Body } from '@nestjs/common';
import { JournalEntryService } from './journal-entry.service';
import { JournalEntry } from '../database/entities/journal-entry.entity';
import { JournalEntryDTO } from './dto/journal-entry-dto';
import { mapJournalEntryDTOToJournalEntry } from './mappers/journal-entry-mapper';

@Controller('journal-entry')
export class JournalEntryController {
  constructor(private readonly journalEntryService: JournalEntryService) {}

  @Post()
  async create(@Body() journalEntryDTO: JournalEntryDTO) {
    const journalEntry = mapJournalEntryDTOToJournalEntry(journalEntryDTO);
    await this.journalEntryService.create(journalEntry);
  }
}
