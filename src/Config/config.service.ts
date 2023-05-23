import { Logger } from '@nestjs/common';

export class ConfigService {
  private loger = new Logger(this.constructor.name);
  constructor(private env: NodeJS.ProcessEnv) {}

  getPort() {
    return parseInt(process.env.PORT, 10) || 4200;
  }

  getUri(): string {
    return this.env.PG_URL_MASTER;
  }

  getPrefix(): string {
    return 'api';
  }

  getInitCallback(): () => void {
    return () => this.loger.log(`listening port: ${this.getPort()}`);
  }
}
