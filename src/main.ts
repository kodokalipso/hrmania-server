import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from './Config';
import session from 'express-session';

const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  app.use(session(configService.getSessionOptions()));
  app.setGlobalPrefix('api');
  await app.listen(configService.getPort(), configService.getInitCallback());
}
bootstrap();

process.on('uncaughtException', (error, origin) => logger.error(error, origin));
