import axios from "axios";
import dispatcher from "../src/scripts/dispatcher";

// The abilitiy to add/delete/edit items is not part of the
// current prototype

// export function createNav(text) {
//   dispatcher.dispatch({
//     type: "CREATE_NAV",
//     text,
//   });
// }

// export function deleteNav(id) {
//   dispatcher.dispatch({
//     type: "DELETE_NAV",
//     id,
//   });
// }

export function loadNav() {
  dispatcher.dispatch({type: "FETCH_NAV"});
  axios.get("/api/nav").then((data) => {
    dispatcher.dispatch({type: "RECEIVE_NAV_ITEM", nav: data.data});
  })
}
