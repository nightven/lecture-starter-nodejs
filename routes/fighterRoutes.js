import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter

router.get("/", responseMiddleware(fighterService.getAllFighters));

router.get("/:id", responseMiddleware(fighterService.getFighterById));

router.post(
  "/",
  createFighterValid,
  responseMiddleware(fighterService.createFighter)
);

router.put(
  "/:id",
  updateFighterValid,
  responseMiddleware(fighterService.updateFighter)
);

router.delete("/:id", responseMiddleware(fighterService.deleteFighter));



export { router };
