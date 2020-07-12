import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name
    this.tasks = data.tasks || []
    this.bg = data.bg
    this.font = data.font
  }

  get Template() {
    let template =
      `<div class="grid-item" style="color: ${this.font}; background-color: ${this.bg};">
  <p class="fontchange between"><span>LIST: ${this.name}</span>
    <button type="button" class="close tinyfont" aria-label="Remove" onclick="app.listController.deleteList('${this.id}')">&times;remove list
      </button></p>
  <p class="fontchange">TASKS:</p>
  <form onsubmit="app.listController.addTask(event, '${this.id}')">
    <div class="form-group">
      <input type="text" name="taskName" class="form-control" placeholder="Enter Task Name...">
        <button type="submit" class="close tinyfont mt-1" aria-label="Remove">
          <span>&plus;add task</span>
        </button>
      </div>
    </form>
    <ul class="pl-3">
    `

    this.tasks.forEach((task) => template += `
    <li class="">${task}
        <button type="button" class="close tinyfont mt-2" aria-label="Remove" onclick="app.listController.deleteTask('${task}')">
    &times;remove task</button>
</li>`)

    template += `</ul>
    </div>`

    return template
  }

}