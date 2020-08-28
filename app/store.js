import List from "./Models/List.js";

console.log("store check")

let _state = {
  /**@type {List[]} */
  lists: [
    // TODO test list for template
    new List({title: "Birds of the World", items: ["Eat Fish","Swim","Freedom Cry"], color:"#ff7034",})
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
