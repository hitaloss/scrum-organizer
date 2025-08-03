import { DataSource } from "typeorm";
import { AppError } from "./errors/appError";
require("dotenv").config();

if (
  !process.env.POSTGRES_USER ||
  !process.env.POSTGRES_PWD ||
  !process.env.POSTGRES_DB
) {
  throw new AppError(
    511,
    "PostgreSQL connection configuration is incomplete. Please provide user, password and database name."
  );
}

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_USER!,
  password: process.env.POSTGRES_PWD!,
  database: process.env.POSTGRES_DB!,
  synchronize: false,
  logging: true,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
