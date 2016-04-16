import { EventEmitter } from "events";

import dispatcher from "../src/scripts/dispatcher";

class SocialLinkStore extends EventEmitter {
  constructor() {
    super()
    // Store is empty until populated
    this.socialLinks = []
  }

  getAll() {
    return this.socialLinks;
  }

  handleActions(action) {
    switch(action.type) {
      case "RECEIVE_SOCIAL_LINKS": {
        this.socialLinks = action.socialLinks;
        this.emit("change");
        break;
      }
    }
  }

}

const socialLinkStore = new SocialLinkStore;
dispatcher.register(socialLinkStore.handleActions.bind(socialLinkStore));

export default socialLinkStore;
