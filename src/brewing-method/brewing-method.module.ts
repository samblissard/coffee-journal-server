import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrewingMethod } from '../database/entities/brewing-method.entity';
import { BrewingMethodService } from './brewing-method.service';
import { BrewingMethodController } from './brewing-method.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BrewingMethod])],
  providers: [BrewingMethodService],
  exports: [BrewingMethodService],
  controllers: [BrewingMethodController],
})
export class BrewingMethodModule {}
