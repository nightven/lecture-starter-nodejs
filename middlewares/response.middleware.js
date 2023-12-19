const responseMiddleware = (controllerMethod) => {
  // TODO: Implement middleware that returns result of the query
  return (req, res, next) => {
   
    const result = controllerMethod(req, res); // Або залежно від того, як ви передаєте параметр "search"

    if (result === null) {
      return res.status(404).json({ error:true, message: "Not found" });
    }

    res.status(200).json(result);
    next();
  };
};

export { responseMiddleware };
