import { Request, Response } from "express";

import deleteTaskService from "../../services/tasks/deleteTask.service";

async function deleteTaskController(request: Request, response: Response) {
  const taskId = request.params.id;

  const deletedTask = await deleteTaskService(taskId!);

  return response
    .status(201)
    .json({ statusCode: 200, message: "Success", task: deletedTask });
}

export default deleteTaskController;
