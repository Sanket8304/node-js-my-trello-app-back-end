// Take database
import {Lists} from "./../models/data.js";

const createCard = (request, response) => {
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
  };

  export { createCard };