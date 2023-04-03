import { Router } from "express"
import AuthController from "./controllers/AuthController"
import { UserController } from "./controllers/UserController"
import authMiddleware from "./middlewares/AuthMiddleware"

const routes = Router()

routes.post('/users', new UserController().create)
routes.get('/users', authMiddleware, new UserController().list)
routes.post('/users/:idUser/contacts', new UserController().createContact)
routes.get('/users/:idUser/contacts', new UserController().listContacts)
routes.post('/login', AuthController.authenticate)

export default routes