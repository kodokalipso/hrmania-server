import { Module } from '@nestjs/common';
import { ConfigModule } from './Config';
import { UserModule } from './User/user.module';

@Module({
  imports: [ConfigModule, UserModule],
  controllers: [],
})
export class AppModule {}
