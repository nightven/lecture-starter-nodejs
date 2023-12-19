import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  createUser(req, res) {
    const body = req.body;
    if (!body) {
      return null;
    }
   
    const newUser = userRepository.create(body);
    if (!newUser) {
      return null;
    }
    return newUser;
  }

  getUsers() {
    const users = userRepository.getAll();

    if (!users) {
      return null;
    }
    return users;
  }

  deleteById(req, res) {
    const { id } = req.params;

    if (!id) {
      return null;
    }
    const deletedUser = userRepository.delete(id);

    if (deletedUser.length === 0) {
      return null;
    }
    return deletedUser;
  }

  updateUser(req, res) {
    const { id } = req.params;

    if (!id) {
      return null;
    }

    const updateUser = userRepository.update(id, req.body);

    if (!updateUser) {
      return null;
    }
    return updateUser;
  }

  search(req) {
    const id = req.params;

    const item = userRepository.getOne(id);
    if (!item) {
      return null;
    }
    return item;
  }
}

const userService = new UserService();

export { userService };
