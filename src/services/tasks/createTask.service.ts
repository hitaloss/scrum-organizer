import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Task } from "../../entities/task.entity";
import { ITaskCreate } from "../../interfaces/tasks/tasks";
import { dateTime } from "../../utils/dateTime";

async function createTaskService({
  title,
  description,
  status,
  priority,
  responsible,
}: ITaskCreate): Promise<Task> {
  const taskRepository = AppDataSource.getRepository(Task);

  if (!title || !description || !status || !priority || !responsible) {
    throw new AppError(403, "Missing body params");
  }

  if (
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

  const newTask = taskRepository.create({
    title,
    description,
    status,
    priority,
    responsible,
    creationDate: dateTime(),
    updatedDate: dateTime(),
  });

  await taskRepository.save(newTask);
  return newTask;
}

export default createTaskService;
