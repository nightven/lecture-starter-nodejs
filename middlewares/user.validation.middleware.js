import { USER } from "../models/user.js";

const HttpError = (status, message) => {
  const error = new Error(message);
  error.status = status;

  return error;
};
const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation
  const user = req.body;
  const userKeys = Object.keys(req.body);
  const modelUserLength = Object.keys(USER).length;

  const isValidUser = userKeys.every((key) => {
    if (USER.hasOwnProperty(key) && userKeys.length === modelUserLength - 1) {
      return true;
    }
    return false;
  });

  if (!isValidUser) {
    next(HttpError(400, "messing field"));
  }
  validateEmail(user.email);
  validatePhoneNumber(user.phoneNumber);

  function validateEmail(email) {
    // Перевірка, чи email закінчується на @gmail.com
    const emailPattern = /^[a-zA-Z0-9_.+-]+@gmail.com$/;
    const validMail = emailPattern.test(email);

    if (!validMail) {
      next(HttpError(400, "email is not valid"));
    }
    return;
  }

  function validatePhoneNumber(phoneNumber) {
    const numberPattern = /^\+380\d{9}$/;
    const validNumber = numberPattern.test(phoneNumber);

    if (!validNumber) {
      next(HttpError(400, "phoneNumber is not valid"));
    }
    return;
  }
  if (user.password.length <= 3) {
    next(HttpError(400, "password will to be more 3 symbol"));
  }

  next();
};


const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  next();
};

export { createUserValid, updateUserValid };


