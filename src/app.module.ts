import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './Database';
import { ConfigModule } from './Config';
import { AppEntity } from './app.entity';
import { DATABASE_CONNECTION } from './Database/database.provider';
import { AppDataSource } from './Database/database.source';

@Module({
  imports: [DatabaseModule, ConfigModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TEST_ENTITY',
      inject: [DATABASE_CONNECTION],
      useFactory: () => AppDataSource.getRepository(AppEntity),
    },
  ],
})
export class AppModule {}
