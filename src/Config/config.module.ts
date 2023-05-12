import { Module } from '@nestjs/common';
import { configProvider } from './config.provider';
import { ConfigService } from './config.service';

@Module({
  providers: [configProvider],
  exports: [ConfigService],
})
export class ConfigModule {}
