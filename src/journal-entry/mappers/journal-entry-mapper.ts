import { JournalEntryDTO } from '../dto/journal-entry-dto';
import { JournalEntry } from '../../database/entities/journal-entry.entity';
import { mapCoffeeDTOToCoffee } from '../../coffee/mappers/coffee-mappers';
import { BrewingMethod } from '../../database/entities/brewing-method.entity';

export function mapJournalEntryDTOToJournalEntry(
  dto: JournalEntryDTO,
): JournalEntry {
  const journalEntry = new JournalEntry();
  journalEntry.coffee = mapCoffeeDTOToCoffee(dto.coffee);
  journalEntry.brewingMethod = new BrewingMethod(dto.brewingMethod);
  journalEntry.coffeeWeight = dto.coffeeWeight;
  journalEntry.waterWeight = dto.waterWeight;
  journalEntry.grindSetting = dto.grindSetting;
  return journalEntry;
}
