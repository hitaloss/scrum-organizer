import { DataSource } from "typeorm";
import "dotenv/config";

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
  entities: [
    process.env.NODE_ENV === "production"
      ? "dist/entities/*.js"
      : "src/entities/*.ts",
  ],
  migrations: [
    process.env.NODE_ENV === "production"
      ? "dist/migrations/*.js"
      : "src/migrations/*.ts",
  ],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
