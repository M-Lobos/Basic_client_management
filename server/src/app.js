import express from "express";
import cors from "cors";
import morgan from "morgan"

import { serverInit } from "./services/serverInit.js";
import routes from "./routes/routes.js"


const app = express();
const PORT = process.env.PORT || 3000;



// middleware for parsing reques bodies on json and multiformat
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware for give access to any resources via browser froma another domain
app.use(cors());
app.use(morgan('dev'));

app.use("/api/v1", routes)

serverInit(app, PORT);
