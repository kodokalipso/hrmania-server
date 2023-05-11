import { ConfigService } from './config.service';
import { FactoryProvider } from '@nestjs/common';

export const configProvider: FactoryProvider = {
  provide: ConfigService,
  useFactory: async () => new ConfigService(process.env),
};
