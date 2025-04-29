import express from "express";

import { serverInit } from "./services/serverInit.js";

const app = express();
const PORT = process.env.PORT || 4000;

// middleware for parsing reques bodies on json and multiformat
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

serverInit(app, PORT);
