import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Session,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { LogReturnValue } from '../../../Base/decorators/log-return-value.decorator';
import { AuthGuard } from '../../../Base/guards/auth.guard';

@Controller('auth')
export class AuthHttpController {
  logger = new Logger(this.constructor.name);
  users = [
    { id: 1, name: 'ALEJANDRO' },
    { id: 2, name: 'ROBERTO' },
  ];
  @Post()
  @LogReturnValue()
  public async login(
    @Session() session: Record<string, any>,
    @Body() loginDTO: any,
  ) {
    const index = this.users.findIndex((user) => user.name === loginDTO.name);
    if (index === -1) {
      throw new UnauthorizedException();
    }
    session.user = this.users[index];
    return 'ok';
  }

  @Get()
  @UseGuards(AuthGuard)
  @LogReturnValue()
  public async getHello(@Session() session: Record<string, any>) {
    return `hello ${session.user.name}`;
  }
}
