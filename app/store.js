import List from "./Models/List.js";

let _state = {
  /**@type {List[]} */
  lists: [
    // TODO test list for template
    new List({title: "Birds of the World", items: ["Eat Fish","Swim","Freedom Cry"], color:"#4169e1",})
  ]
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
