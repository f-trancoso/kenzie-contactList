import { Router } from "express"
import AuthController from "./controllers/AuthController"
import { UserController, ContactController } from "./controllers/UserController"
import authMiddleware from "./middlewares/AuthMiddleware"

const routes = Router()


// User routes
routes.post('/users', new UserController().create)
routes.get('/users', authMiddleware, new UserController().list)
routes.patch('/users/:userId', authMiddleware, new UserController().update)
routes.delete('/users/:userId', authMiddleware, new UserController().delete)
routes.get('/users/:userId', authMiddleware, new UserController().listById)

//Contact Routes
routes.post('/users/:userId/contacts', authMiddleware, new ContactController().create)
routes.get('/users/:userId/contacts', authMiddleware, new ContactController().list)
routes.patch('/users/:userId/contacts/:contactId', authMiddleware, new UserController().update)
routes.delete('/users/:userId/contacts/:contactId', authMiddleware, new UserController().delete)

//auth route
routes.post('/login', AuthController.authenticate)

export default routes