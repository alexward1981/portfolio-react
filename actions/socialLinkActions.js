import axios from "axios";
import dispatcher from "../src/scripts/dispatcher";

export function loadLinks() {
  dispatcher.dispatch({type: "FETCH_LINKS"});
  axios.get("/api/socialLinks").then((data) => {
    dispatcher.dispatch({type: "RECEIVE_SOCIAL_LINKS", socialLinks: data.data});
  })
}
