import { Request, Response } from "express";
import readTasksService from "../../services/tasks/readTasks.service";

async function readTasksController(_: Request, response: Response) {
  const tasks = await readTasksService();

  return response.json({ statusCode: 200, message: "Success", tasks });
}

export default readTasksController;
