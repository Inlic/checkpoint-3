import ListsController from "./Controllers/ListsController.js";

console.log("Main Check")

class App {
  listsController = new ListsController();
}

window["app"] = new App();
