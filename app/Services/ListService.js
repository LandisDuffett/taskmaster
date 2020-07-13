import _store from '../store.js'
import List from "../Models/List.js";
import taskaroo from '../Models/task.js';

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  constructor() {
    console.log("Hello from Service")
  }

  addTask(rawTaskData, listId) {
    let foundListIndex = _store.State.lists.findIndex(list => list.id == listId)
    if (foundListIndex < 0) {
      console.error("No List");
      return
    } else {
      let finalTask = new taskaroo(rawTaskData)
      _store.addTask(finalTask, foundListIndex)
    }
  }

  addList(rawListData) {
    let finalList = new List(rawListData)
    _store.addList(finalList)
  }

  completeTask(item) {
    _store.completeTask(item)
  }

  /*deleteList(item) {
    _store.deleteList(item)
  }*/

  /*deleteTask(t) {
    console.log("helloserv2")
    _store.deleteTask(t)
  }*/
}

const SERVICE = new ListService();
export default SERVICE;