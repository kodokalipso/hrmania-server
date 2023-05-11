import { FactoryProvider, InjectionToken } from '@nestjs/common';
import { AppDataSource } from './database.source';

export const DATABASE_CONNECTION: InjectionToken = 'DATABASE_CONNECTION';

export const databaseProvider: FactoryProvider = {
  provide: DATABASE_CONNECTION,
  useFactory: async () => await AppDataSource.initialize(),
};
