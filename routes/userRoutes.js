import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user

router.get("/", responseMiddleware(userService.getUsers)
);

router.get("/:id", responseMiddleware(userService.search));

router.post("/", createUserValid, responseMiddleware(userService.createUser));

router.delete("/:id", responseMiddleware(userService.deleteById));

router.put("/:id", updateUserValid, responseMiddleware(userService.updateUser));

export { router };
