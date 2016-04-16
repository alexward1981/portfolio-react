import { EventEmitter } from "events";
import { createStore } from "redux";

import dispatcher from "../src/scripts/dispatcher";

class PagesStore extends EventEmitter {
  constructor() {
    super()
    // Store is empty until populated
    this.pages = []
  }

  getAll() {
    return this.pages;
  }

  handleActions(action) {
    switch(action.type) {
      case "RECEIVE_PAGES": {
        this.pages = action.pages;
        this.emit("change");
        break;
      }
    }
  }

}

const pagesStore = new PagesStore;
dispatcher.register(pagesStore.handleActions.bind(pagesStore));
export default pagesStore;
