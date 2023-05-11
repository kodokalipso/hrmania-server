import { Logger } from '@nestjs/common';

export class ConfigService {
  private loger = new Logger(this.constructor.name);
  constructor(private env: NodeJS.ProcessEnv) {}

  getPort() {
    return parseInt(process.env.PORT, 10) || 4200;
  }

  getUri() {
    return this.env.PG_URL_MASTER;
  }

  getInitCallback() {
    return () => this.loger.log(`listening port: ${this.getPort()}`);
  }
}
