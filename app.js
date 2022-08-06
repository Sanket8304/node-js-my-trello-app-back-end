import cors from "cors";
import express, { response } from "express";
import bodyParser from "body-parser";

const PORT = process.env.PORT;
const app = express();

// Indicate the Express.js that yo're using an additional plugin to trear parameters.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

module.exports = app;