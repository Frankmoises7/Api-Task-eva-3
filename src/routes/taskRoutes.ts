import { Router } from "express"
import TaskController from "../controllers/TasksController"
import tokenValidator from "../middlewares/tokenValidator"

const taskRoutes = Router()
const controller = new TaskController()

taskRoutes.get('/', tokenValidator(), controller.getAll)
taskRoutes.get('/:id', controller.getById)

taskRoutes.post('/create', controller.create)
taskRoutes.put('/update/:id', controller.update)
taskRoutes.post('/delete/:id', controller.delete)

export default taskRoutes
