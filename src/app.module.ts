import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JournalEntryModule } from './journal-entry/journal-entry.module';
import { CoffeeModule } from './coffee/coffee.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CoffeeModule, JournalEntryModule],
})
export class AppModule {}
