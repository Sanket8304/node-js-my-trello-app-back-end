import dotenv from "dotenv";
import cors from "cors";
import express, { response } from "express";
import bodyParser from "body-parser";
// import userRoutes from "./src/api-routes/baseRoutes"
// const userRoutes = require('./routes/userRoutes');
import router from "./src/apiRoutes/baseRoutes.js";

// Configure .env file for environment variables
dotenv.config();


// TODO - Connect To Database


//--------------------------
// Start the Server

const PORT = process.env.PORT;
const app = express();

// Routes
app.use('/', router);

// Indicate the Express.js that yo're using an additional plugin to trear parameters.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`The Books API is running on: http://localhost:${PORT}.`);
});

