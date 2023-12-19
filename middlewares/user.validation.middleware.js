import { USER } from "../models/user.js";

const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation

  const { phoneNumber, email, password } = req.body;
  const userKeys = Object.keys(req.body);
  const modelUserLength = Object.keys(USER).length;

  if (userKeys.length === 0) {
    return res
      .status(400)
      .json({ error: true, message: "Missing user fields" });
  }

  const isValidUser = userKeys.every((key) => {
    if (
      USER.hasOwnProperty(key) &&
      userKeys.length === modelUserLength - 1 &&
      userKeys.length !== 0
    ) {
      return true;
    }
    return false;
  });

  if (!isValidUser) {
    return res
      .status(400)
      .json({ error: true, message: "Missing user fields" });
  }

  const validNumber = /^\+380\d{9}$/.test(phoneNumber);
  const validMail = /^[a-zA-Z0-9_.+-]+@gmail.com$/.test(email);

  if (!validMail) {
    return res
      .status(400)
      .json({ error: true, message: "email is not valid,must be 'gmail'" });
  }

  if (!validNumber) {
    return res.status(400).json({
      error: true,
      message: "phoneNumber is not valid",
    });
  }
  if (password.length <= 3) {
    return res
      .status(400)
      .json({ error: true, message: "password will to be more 3 symbol" });
  }

  next();
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update

  const userKeys = Object.keys(req.body);
  console.log(userKeys);

  if (userKeys.length === 0) {
    return res
      .status(400)
      .json({ error: true, message: "Missing user field" });
  }

  const isValidUser = userKeys.every((key) => {
    if (USER.hasOwnProperty(key)) {
      return true;
    }
    return false;
  });

  

  if (!isValidUser) {
    return res.status(400).json({ error: true, message: "Missing user field" });
  }

  next();
};

export { createUserValid, updateUserValid };
