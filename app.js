import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import express, { response } from "express";
import bodyParser from "body-parser";

const PORT = process.env.PORT;
const app = express();

// Indicate the Express.js that yo're using an additional plugin to trear parameters.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.get("/", (request, response) => {
  response.send("Welcome on the books API! Take a breath and start using it!");
});

// Static variable containing your books
let Lists = [
  {
    id: 1,
    title: "List 1",
    isAddCard: false,
    cardList: [
      {
        id: 1,
        cardTitle: "Card 1",
      },
    ],
  },
  {
    id: 2,
    title: "List 2",
    isAddCard: false,
    cardList: [],
  },
];

app.get("/dashboard_lists", (requset, response) => {
  response.send({ lists: Lists });
});

// create a list
app.post("/create_list", (request, response) => {
  const bookName = request.body.name;
  //Check if it contain the book?
  if (Lists.includes(bookName)) return response.json({ sucess: false });

  Lists.push(bookName);
  return response.json({ success: true });
});

//add a card
app.post("/create_card", (request, response) => {
  const bookName = request.body.name;

  return response.json({ success: true });
});

// delete a list
app.delete("/delete_list", (request, response) => {
  const bookToDelete = request.body.name;

  Lists = Lists.filter((book) => book !== bookToDelete);

  return response.json({ allBooks: Lists });
});

// delete a card
app.delete("/delete_card", (request, response) => {
  
  return response.json({ allBooks: Lists });
});

// Update a card
app.put("/update_card_data", (request, response) => {
  
  return response.json({ allBooks: Lists });
});

// Listen the server
app.listen(PORT, () => {
  console.log(`The Books API is running on: http://localhost:${PORT}.`);
});
