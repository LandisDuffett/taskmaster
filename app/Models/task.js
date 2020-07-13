import { generateId } from "../utils.js";

export default class taskaroo {
    constructor(data) {
        //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
        this.id = data.id || generateId();
        this.name = data.name;
        this.strike = data.strike;
    }

}