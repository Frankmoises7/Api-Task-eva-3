import { Router } from "express"
import HealthController from "../controllers/HealthController"


const healthRoutes = Router()
const controllers = new HealthController()

healthRoutes.get('/info', controllers.info)
healthRoutes.get('/ping', controllers.ping)

export default healthRoutes