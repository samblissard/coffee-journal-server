import { NestFactory } from '@nestjs/core';
import { SeederModule } from './seeder.module';
import { Seeder } from './seeder';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(SeederModule);
  const seeder = appContext.get(Seeder);
  await seeder.seed();
  appContext.close();
}
bootstrap();
