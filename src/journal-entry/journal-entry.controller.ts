import { Controller, Post, Body } from '@nestjs/common';
import { JournalEntryService } from './journal-entry.service';
import { JournalEntryDTO } from './dto/journal-entry-dto';
import { mapJournalEntryDTOToJournalEntry } from './mappers/journal-entry-mapper';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('journal-entry')
@Controller('journal-entry')
export class JournalEntryController {
  constructor(private readonly journalEntryService: JournalEntryService) {}

  @ApiOperation({ summary: 'Create journal entry' })
  @ApiResponse({ status: 201, description: 'Created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post()
  async create(@Body() journalEntryDTO: JournalEntryDTO) {
    const journalEntry = mapJournalEntryDTOToJournalEntry(journalEntryDTO);
    await this.journalEntryService.create(journalEntry);
  }
}
