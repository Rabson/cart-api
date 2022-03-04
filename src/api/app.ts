import express, { Application } from "express";
import router from "./routes";
import swaggerUi = require("swagger-ui-express");
import fs = require("fs");

const app: Application = express();
const swaggerFile: string = process.cwd() + "/swagger/swagger.json";
const swaggerData: string = fs.readFileSync(swaggerFile, "utf8");
const swaggerDocument = JSON.parse(swaggerData);

app.use(express.json());
app.use("/", router);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
