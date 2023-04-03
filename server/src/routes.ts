import { Router } from "express"
import { UserController } from "./controllers/UserController"

const routes = Router()

routes.post('/users', new UserController().create)
routes.get('/users', new UserController().list)
routes.post('/users/:idUser/contacts', new UserController().createContact)
routes.get('/users/:idUser/contacts', new UserController().listContacts)

export default routes