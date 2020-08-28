import ListsService from "../Services/ListsService.js";
import STORE from "../store.js"

console.log("Controller Check")
//Private
function _drawLists(){
  console.log("draw check")
  let template = ''
  STORE.State.lists.forEach(l => template += l.Template)
  document.getElementById("tasklists").innerHTML = template
}


//Public
export default class ListsController {
  constructor() {
    _drawLists()
  }

  // List Related Methods
  createList(event){
    event.preventDefault()
    let form = event.target
    let newList = { title: form.title.value, color: form.color.value }
    ListsService.createList(newList)
    _drawLists()
  }



  // Item Related Methods
  addItem(event,id){
    event.preventDefault()
    let form = event.target
    let newItem = form.item.value
    ListsService.addItem(newItem, id)
    _drawLists()
  }

  removeItem(id,item){
    ListsService.removeItem(id,item)
    _drawLists();
  }
}
