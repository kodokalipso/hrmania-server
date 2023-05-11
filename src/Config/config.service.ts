export class ConfigService {
  constructor(private env: NodeJS.ProcessEnv) {}

  getPort() {
    return parseInt(this.env.PORT, 10);
  }

  getUri() {
    return this.env.PG_URL_MASTER;
  }
}
