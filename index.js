import cors from "cors";
import express from "express";
import { initRoutes } from "./routes/routes.js";

import "./config/db.js";
import { responseMiddleware } from "./middlewares/response.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(responseMiddleware) 

initRoutes(app);

app.use("/", express.static("./client/build"));


const port = 3080;
app.listen(port, () => {});

export { app };
