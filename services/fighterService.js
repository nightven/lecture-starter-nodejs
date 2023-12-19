import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  getAllFighters() {
    const fighters = fighterRepository.getAll();
    if (!fighters) {
      return null;
    }
    return fighters;
  }

  getFighterById(req, res) {
    const fighter = fighterRepository.getOne(req.params);

    if (!fighter) {
      return null;
    }
    return fighter;
  }

  createFighter(req, res) {
    const newFighter = fighterRepository.create(req.body);

    if (!newFighter) {
      return null;
    }
    return newFighter;
  }

  updateFighter(req, res) {
    const { id } = req.params;
    const updatedFighter = fighterRepository.update(id, req.body);
    if (!updatedFighter) {
      return null;
    }
    return updatedFighter;
  }

  deleteFighter(req, res) {
    const { id } = req.params;
    const deletedFighter = fighterRepository.delete(id);
    if (deletedFighter.length === 0) {
      return false;
    }
    return deletedFighter;
  }
}

const fighterService = new FighterService();

export { fighterService };
