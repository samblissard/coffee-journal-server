import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrewingMethod } from '../database/entities/brewing-method.entity';
import { BrewingMethodService } from './brewing-method.service';

@Module({
  imports: [TypeOrmModule.forFeature([BrewingMethod])],
  providers: [BrewingMethodService],
  exports: [BrewingMethodService],
})
export class BrewingMethodModule {}
