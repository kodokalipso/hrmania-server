import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = parseInt(process.env.PORT, 10) || 4200;
  await app.listen(port, () => logger.log(`Listening port: ${port}`));
}
bootstrap();

process.on('uncaughtException', (error, origin) => logger.error(error, origin));
