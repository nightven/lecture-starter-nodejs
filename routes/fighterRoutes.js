import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter

router.get("/", fighterService.getAllFighters);

router.get("/:id", fighterService.getFighterById);

router.post("/", createFighterValid, fighterService.createFighter);

router.put("/:id", updateFighterValid, fighterService.updateFighter);

router.delete("/:id", fighterService.deleteFighter);



export { router };
