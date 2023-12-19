import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  getAllFighters(req, res) {
    const fighters = fighterRepository.getAll();

    res.json(fighters);
  }

  getFighterById(req, res) {
    const fighter = fighterRepository.getOne(req.params);

    if (!fighter) {
      return;
    }

    res.json(fighter);
  }

  createFighter(req, res) {
    const newFighter = fighterRepository.create(req.body);

    res.sendSuccess(200, newFighter);
  }

  updateFighter(req, res) {
    const { id } = req.params;
    const updatedFighter = fighterRepository.update(id, req.body);
    if (!updatedFighter) {
      return null;
    }
    res.status(200).json(updatedFighter);
  }

  deleteFighter(req, res) {
    const { id } = req.params;
    const deletedFighter = fighterRepository.delete(id);
    if (deletedFighter.length === 0) {
      res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json({ message: "fighter was deleted" });
  }

}

const fighterService = new FighterService();

export { fighterService };
