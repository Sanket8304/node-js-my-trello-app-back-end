import dotenv from "dotenv";
dotenv.config();


import express, { response } from 'express'
import bodyParser from 'body-parser'


const PORT = process.env.PORT;
const app = express()

// Indicate the Express.js that yo're using an additional plugin to trear parameters.
app.use(bodyParser.urlencoded({extended:true}))


app.get('/', (request, response) => {
  response.send("Welcome on the books API! Take a breath and start using it!");
})


// Static variable containing your books
let bookList = [
  'Make Time: How to Focus on what Matters Every Day',
  'The Power Of Habit',
]


app.get('/books', (requset, response) => {
  return response.json({ allBooks: bookList})
})


// post the book
app.post('/books', (request, response)=>{
  const bookName = request.body.name
  //Check if it contain the book?
  if(bookList.includes(bookName)) return response.json({sucess: false})

  bookList.push(bookName)
  return response.json({success: true})
})



// Delete the book
app.delete('/books', (request, response)=> {
  const bookToDelete = request.body.name

  bookList = bookList.filter((book) => book !== bookToDelete)

  return response.json({allBooks: bookList})
})


// Update the Book 
app.put('/books', (request, response) => {
  const bookToUpdate = request.body.bookToUpdate
  const bookUpdated = request.body.bookUpdated

  let indexOfBook=-1;

  let counter = 0;
  for(let i in bookList){
    if(bookList[i]==bookToUpdate){
      indexOfBook = counter;
      break;
    }
    counter++;
  }


  if(indexOfBook === -1){
    return response.json({ "success": false })
  }

  bookList[indexOfBook] = bookUpdated

  return response.json({ "allBooks" : bookList})
})


// Listen the server
app.listen(PORT, ()=> {
  console.log(`The Books API is running on: http://localhost:${PORT}.`);
})