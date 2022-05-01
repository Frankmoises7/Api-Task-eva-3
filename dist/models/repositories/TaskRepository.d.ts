import { CreateTaskDTO, UpdateTaskDTO, TaskDTO } from "../dto/TaskDTO";
export default class TaskRepository {
    private userId;
    constructor(userId: number);
    readonly findAll: () => Promise<TaskDTO[]>;
    readonly findById: (id: number) => Promise<TaskDTO | undefined>;
    readonly create: (task: CreateTaskDTO) => Promise<TaskDTO>;
    readonly update: (id: number, task: UpdateTaskDTO) => Promise<void>;
    readonly delete: (id: number) => Promise<void>;
}
