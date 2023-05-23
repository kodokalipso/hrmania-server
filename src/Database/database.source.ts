/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DataSource } from 'typeorm';
import { parse } from 'pg-connection-string';
import dotenv from 'dotenv';

dotenv.config();

const pgConfigMaster = parse(process.env.PG_URL_MASTER!);

export const AppDataSource = new DataSource({
  type: 'postgres',
  replication: {
    master: {
      host: pgConfigMaster.host!,
      port: Number(pgConfigMaster.port!),
      username: pgConfigMaster.user!,
      password: pgConfigMaster.password!,
      database: pgConfigMaster.database!,
    },
    slaves: [],
  },
  entities: [],
  synchronize: false, // ! НИКОГДА НЕ ВКЛЮЧАТЬ ЭТОТ ФЛАГ. ЕСЛИ ТРЕБУЕТСЯ ЧТО-ТО СИНХРОНИЗИРОВАТЬ, ЗАПУСКАЕМ npm run typeorm:sync (+ предварительно npm run typeorm:log, для проверки)
  logging: false,
  ssl: {
    rejectUnauthorized: false,
  },
  cache: true,
  migrations: [],
});
