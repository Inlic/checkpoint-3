import ListsService from "../Services/ListsService.js";
import STORE from "../store.js"


//Private
function _drawLists(){
  STORE.saveState()
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

  removeList(id){
    ListsService.removeList(id)
    _drawLists()
  }

  // Item Related Methods
  addItem(event,id){
    event.preventDefault()
    let form = event.target
    let itemString = id+"item"
    let newItem = form[itemString].value
    ListsService.addItem(newItem, id)
    _drawLists()
  }

  toggleItem(id,item){
    ListsService.toggleItem(id,item)
    _drawLists()
  }
  removeItem(id,item){
    ListsService.removeItem(id,item)
    _drawLists();
  }
}
