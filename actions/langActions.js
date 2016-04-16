import axios from "axios";
import dispatcher from "../src/scripts/dispatcher";

export function loadLang() {
  dispatcher.dispatch({type: "FETCH_LANG"});
  // Note: The API supports multiple languages but using them will require
  // additional development.
  axios.get("/api/lang/en-gb").then((data) => {
    dispatcher.dispatch({type: "RECEIVE_LANG_DEFINITIONS", lang: data.data.definitions});
  })
}
