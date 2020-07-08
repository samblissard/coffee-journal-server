import { JournalEntryDTO } from '../dto/journal-entry-dto';
import { JournalEntry } from '../../database/entities/journal-entry.entity';
import { mapCoffeeDTOToCoffee } from '../../coffee/mappers/coffee-mappers';

export function mapJournalEntryDTOToJournalEntry(
  dto: JournalEntryDTO,
): JournalEntry {
  const journalEntry = new JournalEntry();
  journalEntry.coffee = mapCoffeeDTOToCoffee(dto.coffee);
  return journalEntry;
}
