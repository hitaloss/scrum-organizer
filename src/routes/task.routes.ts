import { Router } from "express";

import createTaskController from "../controllers/tasks/createTask.controller";
import readTasksController from "../controllers/tasks/readTasks.controller";
import updateTaskController from "../controllers/tasks/updateTask.controller";
import deleteTaskController from "../controllers/tasks/deleteTask.controller";

const routes = Router();

export function taskRoutes() {
  console.log("chegou em routes");

  routes.post("", createTaskController);
  routes.get("", readTasksController);
  routes.patch("/:id", updateTaskController);
  routes.delete("/:id", deleteTaskController);
  return routes;
}
