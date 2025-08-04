import { Request, Response } from "express";

import createTaskService from "../../services/tasks/createTask.service";

async function createTaskController(request: Request, response: Response) {
  const { title, description, status, priority, responsible } = request.body;

  const newTask = await createTaskService({
    title,
    description,
    status,
    priority,
    responsible,
  });

  return response
    .status(201)
    .json({ statusCode: 201, message: "Success", task: newTask });
}

export default createTaskController;
