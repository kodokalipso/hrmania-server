import { Inject, Injectable } from '@nestjs/common';
import { DATABASE_CONNECTION } from './Database/database.provider';
import { DataSource } from 'typeorm';
import { ConfigService } from './Config/config.service';

@Injectable()
export class AppService {
  constructor(
    @Inject(DATABASE_CONNECTION) private ds: DataSource,
    private configService: ConfigService,
  ) {
    setTimeout(() => console.log(configService.getUri()), 300);
  }
  async getHello() {
    return await this.ds.query(`SELECT * FROM example`);
  }
}
