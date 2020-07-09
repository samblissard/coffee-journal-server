import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JournalEntryController } from './journal-entry/journal-entry.controller';
import { JournalEntryService } from './journal-entry/journal-entry.service';
import { JournalEntry } from './database/entities/journal-entry.entity';
import { Coffee } from './database/entities/coffee.entity';
import { CoffeeController } from './coffee/coffee.controller';
import { CoffeeService } from './coffee/coffee.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Coffee, JournalEntry]),
  ],
  controllers: [AppController, JournalEntryController, CoffeeController],
  providers: [AppService, JournalEntryService, CoffeeService],
})
export class AppModule {}
