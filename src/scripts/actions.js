import axios from "axios";

const API_ROOT = 'http://localhost:5000/api/';


// actions
export const REQUEST_CONFIG = 'REQUEST_CONFIG';
export const GET_CONFIG = 'GET_CONFIG';
export const REQUEST_LANG = 'REQUEST_LANG';
export const GET_LANG = 'GET_LANG';
export const REQUEST_PAGES = 'REQUEST_PAGES';
export const GET_PAGES = 'GET_PAGES';
export const REQUEST_SOCIAL_LINKS = 'REQUEST_SOCIAL_LINKS';
export const GET_SOCIAL_LINKS = 'GET_SOCIAL_LINKS';

// Config
export function requestConfig() {
  return {
    type: REQUEST_CONFIG
  };
}

export function getConfig(json) {
  return {
    type: GET_CONFIG,
    payload: {
      config: json,
      receivedAt: Date.now()
    }
  };
}

//Config thunk actions
export function configLoad() {
  return dispatch => {
    dispatch(requestConfig());
    return axios.get(API_ROOT + 'config')
      .then(function(response) {
        dispatch(getConfig(response.data))
      })
  }
}
