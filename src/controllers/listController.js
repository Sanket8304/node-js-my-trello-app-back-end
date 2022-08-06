// Take database
import { getList } from "./../models/data.js";
import { v4 as uuidv4 } from 'uuid';

var Lists = getList();

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
  
    Lists.push(formData);
    
    return response.json({ 
      success: true,
      status: 201,
      message: "new List created succesfully.",
      data: formData
    });
  }

  export function deleteList(request, response) {
    let listId = request.body.listId;
  
    Lists = Lists.filter((item) => {
      return item.id != listId;
    })

    return response.json({ 
      success: true,
      status: 200,
      message: `List ${listId} is deleted succesfully.`
    });
  }