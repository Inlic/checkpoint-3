import List from "./Models/List.js";

console.log("store check")

let _state = {
  /**@type {List[]} */
  lists: [
    // TODO test list for template
    new List({title: "Birds of the World", items: [{ item:"Eat Fish", checked: false},{item:"Swim",checked: false},{item:"Freedom Cry",checked:false}], color:"#ff7034",}),
    new List({title: "Stuck in the Middle", items: [{ item:"Eat Fish", checked: false},{item:"Swim",checked: false},{item:"Freedom Cry",checked:false}], color:"#334433",}),
    new List({title: "Down at the End", items: [{ item:"Eat Fish", checked: false},{item:"Swim",checked: false},{item:"Freedom Cry",checked:false}], color:"#ff2304",})
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
