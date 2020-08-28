import List from "../Models/List.js";
import STORE from "../store.js";

console.log("Service Check")

//Public
class ListsService {

//List Related Methods
createList(newList){
  let newContent = new List(newList)
  STORE.State.lists.push(newContent)
}

removeList(id){
  let listIndex = STORE.State.lists.findIndex(l=> l.id == id)
  STORE.State.lists.splice(listIndex, 1)
}

//Item Related Methods

addItem(newItem, id){
  let list = STORE.State.lists.find(l => l.id == id)
  list.items.push(newItem)
}

removeItem(id, item){
  let list = STORE.State.lists.find(l => l.id == id)
  let itemIndex = list.items.findIndex(i => i == item)
  list.items.splice(itemIndex,1)
}

}

const SERVICE = new ListsService();
export default SERVICE;
