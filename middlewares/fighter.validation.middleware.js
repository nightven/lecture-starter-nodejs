import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during creation
  const fighter = req.body;
  const { power, defense, health } = fighter;
  const fighterKeys = Object.keys(fighter);

  if (fighterKeys.length === 0) {
    return res
      .status(404)
      .json({ error: true, message: "Missing fields in FIGHTER" });
  }

  if (!fighter.hasOwnProperty("name")) {
    return res
      .status(400)
      .json({ error: true, message: "Missing name in FIGHTER" });
  }

  if (!fighter.hasOwnProperty("power")) {
    return res
      .status(400)
      .json({ error: true, message: "Missing power in FIGHTER" });
  }
  if (!fighter.hasOwnProperty("defense")) {
    return res
      .status(400)
      .json({ error: true, message: "Missing defense in FIGHTER" });
  }

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
  const fighter = req.body;
  const { health, power, defense } = fighter;
  const fighterKeys = Object.keys(fighter);

  if (fighterKeys.length === 0) {
    return res
      .status(400)
      .json({ error: true, message: "Missing fields in FIGHTER" });
  }

  if (!fighter.hasOwnProperty("name")) {
    return res
      .status(400)
      .json({ error: true, message: "Missing name in FIGHTER" });
  }

  if (!fighter.hasOwnProperty("power")) {
    return res
      .status(400)
      .json({ error: true, message: "Missing power in FIGHTER" });
  }
  if (!fighter.hasOwnProperty("defense")) {
    return res
      .status(400)
      .json({ error: true, message: "Missing defense in FIGHTER" });
  }

  if (typeof power !== "number" || 1 >= power || power >= 100) {
    res.status(400).json({
      error: true,
      message: "invalid power field in fighter",
    });
    return;
  }
  if (health) {
    if (typeof health !== "number" || 80 >= health || health >= 120) {
      res.status(400).json({
        error: true,
        message: "invalid health field in fighter",
      });
      return;
    }
  }

  if (typeof defense !== "number" || 1 >= defense || defense >= 10) {
    res.status(400).json({
      error: true,
      message: "invalid defense field in fighter",
    });
    return;
  }
  next();
};

export { createFighterValid, updateFighterValid };
