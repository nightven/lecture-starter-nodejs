import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during creation

  const fighterKeys = Object.keys(req.body);
  const modelFighterLength = Object.keys(FIGHTER).length;

  const isValidFighter = fighterKeys.every((key) => {
    if (
      FIGHTER.hasOwnProperty(key) &&
      fighterKeys.length === modelFighterLength - 1
    ) {
      return true;
    }
    return false;
  });

  if (!isValidFighter) {
    res.status(404).json({ error: true, message: "Missing fighter  " });
    return;
  }
  const { power, defense, health } = req.body;

  if (80 >= health || health >= 120) {
    res.status(400).json({
      error: true,
      message: "invalid health field in fighter",
    });
    return;
  }
  if (1 >= power || power >= 100) {
    res.status(400).json({
      error: true,
      message: "invalid power field in fighter",
    });
    return;
  }
  if (1 >= defense || defense >= 10) {
    res.status(400).json({
      error: true,
      message: "invalid defense field in fighter",
    });
    return;
  }
  next();
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update
  const fighterKeys = Object.keys(req.body);
  const modelFighterLength = Object.keys(FIGHTER).length;

  const isValidFighter = fighterKeys.every((key) => {
    if (
      FIGHTER.hasOwnProperty(key) &&
      fighterKeys.length === modelFighterLength - 1
    ) {
      return true;
    }
    return false;
  });

  if (!isValidFighter) {
    res.status(404).json({ error: true, message: "Missing fighter  " });
    return;
  }
  const { power, defense, health } = req.body;

  if (typeof power === "string" || 80 >= health || health >= 120) {
    res.status(400).json({
      error: true,
      message: "invalid health field in fighter",
    });
    return;
  }
  if (typeof power === "string" || 1 >= power || power >= 100) {
    res.status(400).json({
      error: true,
      message: "invalid power field in fighter",
    });
    return;
  }
  if (typeof power === "string" || 1 >= defense || defense >= 10) {
    res.status(400).json({
      error: true,
      message: "invalid defense field in fighter",
    });
    return;
  }
  next();
};

export { createFighterValid, updateFighterValid };
