import axios from "axios";

const API_ROOT = 'http://localhost:5000/api/';


// actions
export const REQUEST_CONFIG = 'REQUEST_CONFIG';
export const GET_CONFIG = 'REQUEST_CONFIG';
export const REQUEST_CONFIG = 'GET_CONFIG';
export const REQUEST_LANG = 'REQUEST_LANG';
export const GET_LANG = 'REQUEST_LANG';
export const REQUEST_LANG = 'GET_LANG';
export const REQUEST_PAGES = 'REQUEST_PAGES';
export const GET_PAGES = 'REQUEST_PAGES';
export const REQUEST_PAGES = 'GET_PAGES';
export const REQUEST_SOCIAL_LINKS = 'REQUEST_SOCIAL_LINKS';
export const GET_SOCIAL_LINKS = 'REQUEST_SOCIAL_LINKS';
export const REQUEST_SOCIAL_LINKS = 'GET_SOCIAL_LINKS';

export function requestConfigDone(json) {
  return {
    type: REQUEST_CONFIG,
    payload: {
      json,
      receivedAt: Date.now()
    }
  };
}
