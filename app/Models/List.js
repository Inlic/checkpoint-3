import { generateId } from "../utils.js"

console.log("Model Check")
export default class List {
    constructor({
        title,
        items,
        color
    }) {
        this.id = generateId()
        this.title = title
        this.items = items
        this.color = color
    }

    get Template() {
        return /*html*/`
        <div class="card col-4 px-0 m-3">
                <div class="card-header text-center text-white d-flex flex-column" style="background-color: ${this.color}">
                    <i class="fa fa-trash align-self-end" aria-hidden="true"></i>
                    <h3>${this.title}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        ${this.ItemsTemplate}
                    </ul>
                    <form onsubmit="">
                        <div class="form-row">
                          <div class="col-11">
                            <input type="text" class="form-control" placeholder="Add Task...">
                          </div>
                          <div class="col-1">
                            <button type="submit" class="form-control btn btn-success btn-small">+</button>
                          </div>
                        </div>
                    </form>
                </div>
        </div>`
    }

    get ItemsTemplate(){
        let template = ""
        this.items.forEach(i => {
            template += `<li class="list-group-item">${i}<i class="fa fa-trash float-right" aria-hidden="true"></i></li>`
        })
        return template
    }
}