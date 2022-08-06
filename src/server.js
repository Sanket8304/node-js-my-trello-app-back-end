import dotenv from "dotenv";

// Configure .env file for environment variables
dotenv.config();


// TODO - Connect To Database


//--------------------------
// Start the Server
const app = require('./app');

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`The Books API is running on: http://localhost:${PORT}.`);
});


