// Take database
import { getList } from "./../models/data.js";
import { v4 as uuidv4 } from 'uuid';


export function createCard(request, response) {
  var  Lists = getList();
  
  let listId = request.body.listId;
    let cardTitle = request.body.cardTitle;
    let cardUuid = uuidv4();
  
    let card = {
      cardId: cardUuid,
      cardTitle: cardTitle,
      cardData: {}
  }
  
    Lists = Lists.map((item) => {
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

  export function deleteCard(request, response) {
  var  Lists = getList();

  let listId = request.body.listId;
  let cardId = request.body.cardId;
  
    Lists = Lists.map((item) => {
      if(item.id === listId){
        item.cardList = item.cardList.filter(card => card.cardId !== cardId)
      }
      return item
    })

    return response.json({ 
      success: true,
      status: 201,
      message: `card ${cardId} is deleted succesfully from list ${listId}`,
    });
  };