import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeModule } from './coffee/coffee.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CoffeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
