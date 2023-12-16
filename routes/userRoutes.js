import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user

router.get("/", userService.getUsers);

router.get("/:id", userService.getOneUser);

router.post('/', createUserValid, userService.createUser);

router.delete("/:id", userService.deleteById);

export { router };
