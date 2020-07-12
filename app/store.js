import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: []
};

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.lists = data.lists.map(l => new List(l));
    _state = data;
  }
}
_loadState();

class Store {
  addTask(foundListIndex, rawTaskData) {
    _state.lists[foundListIndex].tasks.push(rawTaskData)
    this.saveState()
  }

  addList(finalList) {
    _state.lists.push(finalList)
    this.saveState()
  }

  /*deleteList(item) {
    swal({
      title: "Woo?",
      text: "you!",
      buttons: {
        cancel: true,
        confirm: "Submit"
      }
    }).then(val => {
      if (val) {
        let indexToRemove = _state.lists.findIndex(list => list.id == item)
        _state.lists.splice(indexToRemove, 1);
        this.saveState();
        swal({
          title: "joo",
          text: "boo",
          icon: "success"
        });

      }
    });
  }*/


  /*deleteTask(t) {
    let r = confirm("Are you sure?")
    if (r == true) {
      for (let x = 0; x < _state.lists.length; x++) {
        for (let y = 0; y < _state.lists[x].tasks.length; y++) {
          if (_state.lists[x].tasks[y] == t) {
            _state.lists[x].tasks.splice(y, 1)
            this.saveState()
          }
        }

      }

    }
    return
  }*/

  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
