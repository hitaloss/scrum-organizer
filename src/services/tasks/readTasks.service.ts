import { AppDataSource } from "../../data-source";

import { Task } from "../../entities/task.entity";

async function readTasksService(): Promise<Task[]> {
  const taskRepository = AppDataSource.getRepository(Task);

  const tasks = await taskRepository.find();

  return tasks;
}

export default readTasksService;
