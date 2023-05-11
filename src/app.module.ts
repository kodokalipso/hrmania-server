import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './Database';
import { ConfigModule } from './Config';

@Module({
  imports: [DatabaseModule, ConfigModule],
  controllers: [AppController],
  providers: [{ provide: AppService, useClass: AppService }],
})
export class AppModule {}
