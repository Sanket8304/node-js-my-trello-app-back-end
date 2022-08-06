import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import express, { response } from "express";
import bodyParser from "body-parser";

import { v4 as uuidv4 } from 'uuid';


const PORT = process.env.PORT;
const app = express();

// Indicate the Express.js that yo're using an additional plugin to trear parameters.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

app.get("/", (request, response) => {
  response.send("Welcome on the books API! Take a breath and start using it!");
});

// Static variable containing your books
let Lists = [];

app.get("/dashboard_lists", (requset, response) => {
  response.send({ lists: Lists });
});


// create a list
app.post("/create_list", (request, response) => {
  let listTitle = request.body.title;

  let uuid = uuidv4();

  let formData = {
    id: uuid,
    title: listTitle,
    isAddCard: false,
    cardList: []
  }

  Lists.push(formData);
  
  return response.json({ 
    success: true,
    status: 201,
    message: "new List created succesfully.",
    data: formData
  });
});


//add a card
app.post("/create_card", (request, response) => {
  let listId = request.body.listId;
  let cardTitle = request.body.cardTitle;
  let cardUuid = uuidv4();

  let card = {
    cardId: cardUuid,
    cardTitle: cardTitle,
    cardData: {}
}

  Lists.map((item) => {
    if(item.id === listId){
      item.cardList.push(card)
    }
  })
  
  return response.json({ 
    success: true,
    status: 201,
    message: `new card is created succesfully in list ${listId}`,
    data: card
  });
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
