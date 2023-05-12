import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CONNECTION, DatabaseModule } from './Database';
import { ConfigModule } from './Config';
import { AppEntity } from './app.entity';
import { AppDataSource } from './Database/database.source';

@Module({
  imports: [DatabaseModule, ConfigModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TEST_ENTITY',
      inject: [CONNECTION],
      useFactory: () => AppDataSource.getRepository(AppEntity),
    },
  ],
})
export class AppModule {}
