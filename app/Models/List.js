import { generateId } from "../utils.js"

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
        <div class="card col-4 m-3">
                <div class="card-header text-center d-flex flex-column">
                    <i class="fa fa-trash pt-2 align-self-end" aria-hidden="true"></i>
                    <h3>Ice Cream I Need to Eat</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Pecan <i class="fa fa-trash float-right" aria-hidden="true"></i></li>
                        <li class="list-group-item">Rocky Road <i class="fa fa-trash float-right" aria-hidden="true"></i></li>
                        <li class="list-group-item">Bubblemint <i class="fa fa-trash float-right" aria-hidden="true"></i></li>
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
}