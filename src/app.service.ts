import { DataSource, Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CONNECTION } from './Database/';
import { ConfigService } from './Config';
import { AppEntity } from './app.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject(CONNECTION) private ds: DataSource,
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
