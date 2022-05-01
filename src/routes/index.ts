import { Router } from "express"
import healthRoutes from "./healthRoutes"
import authRoutes from "./authRoutes"
import taskRoutes from "./taskRoutes"
import tokenValidator from "../middlewares/tokenValidator"

const apiRoutes = Router()

apiRoutes.use('/', healthRoutes)
apiRoutes.use('/task', tokenValidator(), taskRoutes)
apiRoutes.use('/auth', authRoutes)

export default apiRoutes

