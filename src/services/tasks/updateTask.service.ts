import { AppDataSource } from "../../data-source";
import { Task } from "../../entities/task.entity";
import { AppError } from "../../errors/appError";
import { ITaskUpdate } from "../../interfaces/tasks/tasks";
import { dateTime } from "../../utils/dateTime";

async function updateTaskService(
  taskId: string,
  { title, description, status, priority, responsible }: ITaskUpdate
): Promise<Task> {
  const taskRepository = AppDataSource.getRepository(Task);

  const task = await taskRepository.findOneBy({ id: taskId });

  if (!task) throw new AppError(404, "Task not found");

  if (
    status &&
    status !== "A Fazer" &&
    status !== "Em Andamento" &&
    status !== "Bloqueada" &&
    status !== "Para Revisão" &&
    status !== "Concluída"
  ) {
    throw new AppError(
      400,
      'Status must be "A Fazer", "Em Andamento", "Bloqueada", "Para Revisão" or "Concluída".'
    );
  }

  if (
    priority &&
    priority !== "Baixa" &&
    priority !== "Média" &&
    priority !== "Alta" &&
    priority !== "Crítica"
  ) {
    throw new AppError(
      400,
      'Priority must be "Baixa", "Média", "Alta" or "Crítica".'
    );
  }

  await taskRepository.update(taskId, {
    title: title ? title : task.title,
    description: description ? description : task.description,
    status: status ? status : task.status,
    priority: priority ? priority : task.priority,
    responsible: responsible ? responsible : task.responsible,
    updatedDate: dateTime(),
  });

  const updatedTask = await taskRepository.findOneBy({ id: taskId });

  return updatedTask!;
}

export default updateTaskService;
