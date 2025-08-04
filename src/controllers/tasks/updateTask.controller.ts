import { Request, Response } from "express";

import updateTaskService from "../../services/tasks/updateTask.service";

async function updateTaskController(request: Request, response: Response) {
  const { title, description, status, priority, responsible } = request.body;
  const taskId = request.params.id;

  const newTask = await updateTaskService(taskId!, {
    title: title,
    description: description,
    status: status,
    priority: priority,
    responsible: responsible,
  });

  return response
    .status(201)
    .json({ statusCode: 201, message: "Success", task: newTask });
}

export default updateTaskController;
