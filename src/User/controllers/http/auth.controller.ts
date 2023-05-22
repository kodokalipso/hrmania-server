import { Controller, Get } from '@nestjs/common';
import { LogReturnValue } from '../../../Base/decorators/log-return-value.decorator';

@Controller('auth')
export class AuthHttpController {
  @Get()
  @LogReturnValue()
  public async hello() {
    return 'Hello World';
  }
}
