import { request, response, Router } from "express";
import { CreateUserController } from "./controllers/createUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";



const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const AuthenticateUserController = new AuthenticateUserController();

router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", AuthenticateUserController.handle);

export {router}