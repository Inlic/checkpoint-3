import List from "./Models/List.js";

console.log("store check")

let _state = {
  /**@type {List[]} */
  lists: [
    // TODO test list for template
    new List({title: "Groceries", items: [{ item:"Bread", checked: false},{item:"Eggs",checked: false},{item:"Milk",checked:false}], color:"#ff7034",}),
    new List({title: "Chores", items: [{ item:"Take out trash", checked: false},{item:"Clean bathrooms",checked: false},{item:"Do laundry",checked:false}], color:"#08bf11",}),
    new List({title: "Vacation Plan", items: [{ item:"Book Flight", checked: false},{item:"Hire Guide",checked: false},{item:"Set up restaurant tour",checked:false}], color:"#b134eb",})
  ]
};

function _loadState(){
  let data = JSON.parse(localStorage.getItem("lists"))
  if (data) {
    data.lists = data.lists.map(l => new List(l))
    _state = data
  }
}

_loadState()

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  saveState(){
    localStorage.setItem("lists", JSON.stringify(_state))
  }

}

const STORE = new Store();
export default STORE;
