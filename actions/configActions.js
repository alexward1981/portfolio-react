import axios from "axios";
import dispatcher from "../src/scripts/dispatcher";

export function loadConfig() {
  dispatcher.dispatch({type: "FETCH_CONFIG"});
  axios.get("/api/config").then((data) => {
    dispatcher.dispatch({type: "RECEIVE_CONFIG", config: data.data[0]});
  })
}
