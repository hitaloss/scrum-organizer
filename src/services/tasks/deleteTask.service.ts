import { AppDataSource } from "../../data-source";
import { Task } from "../../entities/task.entity";
import { AppError } from "../../errors/appError";

async function deleteTaskService(taskId: string): Promise<String> {
  const taskRepository = AppDataSource.getRepository(Task);

  const task = await taskRepository.findOneBy({ id: taskId });

  if (!task) throw new AppError(404, "Task not found");

  taskRepository.delete({ id: taskId });

  return "Task deleted with success";
}

export default deleteTaskService;
