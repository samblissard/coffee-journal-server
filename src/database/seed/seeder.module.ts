import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seeder } from './seeder';
import { BrewingMethod } from '../entities/brewing-method.entity';
import { BrewingMethodModule } from '../../brewing-method/brewing-method.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
      entities: [BrewingMethod],
      synchronize: true,
    }),
    BrewingMethodModule,
  ],
  providers: [Seeder],
})
export class SeederModule {}
