import List from "../Models/List.js";
import STORE from "../store.js";


//Public
class ListsService {

//List Related Methods
createList(newList){
  let newContent = new List(newList)
  STORE.State.lists.push(newContent)
}

removeList(id){
  if(window.confirm("Delete this list?")){
    let listIndex = STORE.State.lists.findIndex(l=> l.id == id)
    STORE.State.lists.splice(listIndex, 1)
  }
  return
}

//Item Related Methods

addItem(newItem, id){
  let itemObject = {item: newItem, checked: false}
  let list = STORE.State.lists.find(l => l.id == id)
  list.items.push(itemObject)
}

toggleItem(id,item){
  let list = STORE.State.lists.find(l => l.id == id)
  let itemIndex = list.items.findIndex(i => i.item == item)
  if(list.items[itemIndex].checked){
     list.items[itemIndex].checked = false
  } else{
     list.items[itemIndex].checked = true
  } 
}

removeItem(id, item){
  if(window.confirm("Delete this item?")){
    let list = STORE.State.lists.find(l => l.id == id)
    let itemIndex = list.items.findIndex(i => i.item == item)
    list.items.splice(itemIndex,1)
  }
  return
}

}

const SERVICE = new ListsService();
export default SERVICE;
