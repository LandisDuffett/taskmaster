import _listService from "../Services/ListService.js";
import _store from "../store.js"

function _drawLists() {
  let template = ""
  let lists = _store.State.lists
  lists.forEach(list => template += list.Template)
  document.getElementById("lists").innerHTML = template
}
//Public
export default class ListController {
  constructor() {
    console.log("Hello from controller")
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  addList(e) {
    console.log("hello")
    debugger
    e.preventDefault();
    let formData = e.target
    let rawListData = {
      name: formData.listName.value,
      bg: formData.bgcolor.value,
      font: formData.fontcolor.value
    }
    _listService.addList(rawListData)
    formData.reset()
    _drawLists()
  }

  addTask(event, listId) {
    event.preventDefault();
    let formData = event.target.taskName.value
    let rawTaskData = {
      name: formData
    }
    _listService.addTask(rawTaskData, listId)
    event.target.reset()
    _drawLists()
  }

  toggleForm() {
    _listService.toggleForm()
  }

  deleteTask(item) {
    swal({
      title: "Confirm",
      text: "Are you sure?",
      buttons: {
        cancel: true,
        confirm: "Submit"
      }
    }).then(val => {
      if (val) {
        swal({
          title: "Confirm",
          text: "task has been deleted",
          icon: "success"
        });
        for (let x = 0; x < _store.State.lists.length; x++) {
          for (let y = 0; y < _store.State.lists[x].tasks.length; y++) {
            if (_store.State.lists[x].tasks[y] == item) {
              _store.State.lists[x].tasks.splice(y, 1)
              _store.saveState()
              _drawLists()
            }
          }

        }

      }
      return
    }
    )
  }

  completeTask(item) {
    _listService.completeTask(item)
    _drawLists()
  }




  deleteList(item) {
    swal({
      title: "Confirm",
      text: "Are you sure?",
      buttons: {
        cancel: true,
        confirm: "Submit"
      }
    }).then(val => {
      if (val) {
        swal({
          title: "Confirm",
          text: "list has been deleted",
          icon: "success"
        });
        let indexToRemove = _store.State.lists.findIndex(list => list.id == item)
        _store.State.lists.splice(indexToRemove, 1);
        _store.saveState();
        _drawLists();
      }
    });
  }
}