import { DataSource, Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { DATABASE_CONNECTION } from './Database/database.provider';
import { ConfigService } from './Config';
import { AppEntity } from './app.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject(DATABASE_CONNECTION) private ds: DataSource,
    @Inject('TEST_ENTITY') private appRepo: Repository<AppEntity>,
    private configService: ConfigService,
  ) {
    setTimeout(() => console.log(configService.getUri()), 300);
  }
  async getHello() {
    return await this.ds.query(`SELECT * FROM example`);
  }

  async getRepo() {
    return this.appRepo.find();
  }
}
