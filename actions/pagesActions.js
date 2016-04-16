import axios from "axios";
import dispatcher from "../src/scripts/dispatcher";

export function loadPages(page) {
  dispatcher.dispatch({type: "FETCH_PAGES"});
  axios.get("/api/pages/"+page).then((data) => {
    dispatcher.dispatch({type: "RECEIVE_PAGES", pages: data.data});
  })
}
