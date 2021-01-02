import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InvalidInputFilter } from './filters';
import { AuthGuard } from './guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new InvalidInputFilter());
  app.useGlobalGuards(new AuthGuard());
  await app.listen(80);
}
bootstrap();
