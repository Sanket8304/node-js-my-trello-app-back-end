// Take database
import Lists from "./../models/data";
import { v4 as uuidv4 } from 'uuid';

export function getAllLists(requset, response) {
    response.send({ lists: Lists });
}


export function createList(request, response) {
    let listTitle = request.body.title;
  
    let uuid = uuidv4();
  
    let formData = {
      id: uuid,
      title: listTitle,
      isAddCard: false,
      cardList: []
    }
  
    push(formData);
    
    return response.json({ 
      success: true,
      status: 201,
      message: "new List created succesfully.",
      data: formData
    });
  }