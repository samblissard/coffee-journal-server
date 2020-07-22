import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JournalEntryModule } from './journal-entry/journal-entry.module';
import { CoffeeModule } from './coffee/coffee.module';
import { BrewingMethodService } from './brewing-method/brewing-method.service';
import { BrewingMethodModule } from './brewing-method/brewing-method.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CoffeeModule,
    JournalEntryModule,
    BrewingMethodModule,
  ],
})
export class AppModule {}
