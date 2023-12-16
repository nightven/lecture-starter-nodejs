import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  createUser(req, res) {
    const body = req.body;
    const newUser = userRepository.create(body);
    if (!newUser) {
      return null;
    }
    res.status(201).json(newUser);
  }

  getUsers(req, res) {
    const users = userRepository.getAll();
    console.log(users);
        res.status(200).json(users);
  }

  getOneUser(req, res) { 
    const id = req.params
   
    const user = userRepository.getOne(id)
    res.status(200).json(user);
  }

  deleteById(req, res) {
    const {id} = req.params;
    const deletedUser = userRepository.delete(id);
    if (deletedUser.length === 0) {
      res.status(404).json({ message: "Not Found" });
    }
      res.status(200).json({ message: "user was deleted" });
  }


  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

const userService = new UserService();

export { userService };
