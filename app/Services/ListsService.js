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
  swal({
    title: "Delete this list?",
    text: "Once deleted, you will not be able to recover this list!",
    icon: "warning",
    buttons: true,
    dangerMode:true,
  })
  .then((value)=> {
    if(value){
      console.log("TOASTER BREAD")
      let listIndex = STORE.State.lists.findIndex(l=> l.id == id)
      STORE.State.lists.splice(listIndex, 1)
      swal("Your list has been deleted!", {
        icon: "success",
      });
    }
    return
  });
  
  
  
  // if(window.confirm("Delete this list?")){
  //   let listIndex = STORE.State.lists.findIndex(l=> l.id == id)
  //   STORE.State.lists.splice(listIndex, 1)
  // }
  // return
}

//Item Related Methods

addItem(newItem, id){
  let list = STORE.State.lists.find(l => l.id == id)
  list.items.push(newItem)
}

removeItem(id, item){
  if(window.confirm("Delete this item?")){
    let list = STORE.State.lists.find(l => l.id == id)
    let itemIndex = list.items.findIndex(i => i == item)
    list.items.splice(itemIndex,1)
  }
  return
}

}

const SERVICE = new ListsService();
export default SERVICE;
