import { DataSource } from "typeorm";
import { test1673217770171 } from "./database/migrations/1673217770171-test";
import * as dotenv from "dotenv";

dotenv.config();

export const dataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS, 
  database: process.env.DB_NAME,/* 
  logging: true,
  logger: "file", */
  entities: [`${__dirname}/**/*.entity.{ts,js}`],
  synchronize: false,
  migrations: [
    test1673217770171
  ],
  socketPath: process.env.INSTANCE_UNIX_SOCKET
});

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => dataSource.initialize(),
  },
];
