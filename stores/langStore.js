import { EventEmitter } from "events";

import dispatcher from "../src/scripts/dispatcher";

class LangStore extends EventEmitter {
  constructor() {
    super()
    // Store is empty until populated
    this.lang = []
  }

  getAll() {
    return this.lang;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_DEFINITION": {
        this.createTodo(action.text);
        break;
      }
      case "RECEIVE_LANG_DEFINITIONS": {
        this.lang = action.lang;
        this.emit("change");
        break;
      }
    }
  }

}

const langStore = new LangStore;
dispatcher.register(langStore.handleActions.bind(langStore));

export default langStore;
