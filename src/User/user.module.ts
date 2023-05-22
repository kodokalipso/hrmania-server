import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database';
import { AuthHttpController } from './controllers/http/auth.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthHttpController],
  exports: [
    /*разделим юзер сервис на два, во второй засунем то что экспортим в другие модули*/
  ],
})
export class UserModule {}
