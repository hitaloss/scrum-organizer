import { Express } from "express";

import { taskRoutes } from "./task.routes";

export const appRoutes = (app: Express) => {
  app.use("/task", taskRoutes());
};
