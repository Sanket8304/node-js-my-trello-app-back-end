// Take database
import {Lists} from "./../models/data.js";
import { v4 as uuidv4 } from 'uuid';

export function createCard(request, response) {
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