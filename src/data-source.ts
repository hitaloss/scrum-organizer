import { DataSource } from "typeorm";
import "dotenv/config";

const isProd = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRESQL_HOST,
  port: Number(process.env.POSTGRESQL_PORT || 5432),
  username: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  database: process.env.POSTGRESQL_DB,
  synchronize: false,
  logging: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  entities: [isProd ? "dist/entities/*.js" : "src/entities/*.ts"],
  migrations: [isProd ? "dist/migrations/*.js" : "src/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
