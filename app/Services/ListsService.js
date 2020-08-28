import List from "../Models/List.js";
import STORE from "../store.js";

console.log("Service Check")

//Public
class ListsService {

//List Related Methods


//Item Related Methods
removeItem(id, item){
  let list = STORE.State.lists.find(l => l.id == id)
  let itemIndex = list.items.findIndex(i => i == item)
  list.items.splice(itemIndex,1)
}

}

const SERVICE = new ListsService();
export default SERVICE;
