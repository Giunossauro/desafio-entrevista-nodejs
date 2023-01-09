import { DataSource } from "typeorm";
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
  entities: [`src/**/*.entity.ts`],
  synchronize: false,
  migrations: [`src/database/migrations/*.ts`],
  socketPath: process.env.INSTANCE_UNIX_SOCKET
});

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => dataSource.initialize(),
  },
];
