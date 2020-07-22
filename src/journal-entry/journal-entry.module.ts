import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JournalEntry } from '../database/entities/journal-entry.entity';
import { JournalEntryController } from './journal-entry.controller';
import { JournalEntryService } from './journal-entry.service';
import { CoffeeModule } from '../coffee/coffee.module';
import { BrewingMethodModule } from '../brewing-method/brewing-method.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([JournalEntry]),
    CoffeeModule,
    BrewingMethodModule,
  ],
  controllers: [JournalEntryController],
  providers: [JournalEntryService],
})
export class JournalEntryModule {}
