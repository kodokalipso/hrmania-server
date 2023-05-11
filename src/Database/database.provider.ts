import { FactoryProvider, InjectionToken } from '@nestjs/common';
import { AppDataSource } from './database.source';
import { DataSource } from 'typeorm';

export const DATABASE_CONNECTION: InjectionToken = 'DATABASE_CONNECTION';

export const databaseProvider: FactoryProvider<DataSource> = {
  provide: DATABASE_CONNECTION,
  useFactory: async () => await AppDataSource.initialize(),
};
