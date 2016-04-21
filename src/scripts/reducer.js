import Immutable from 'seamless-immutable';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import actions
import {
  REQUEST_CONFIG,
  GET_CONFIG,
  REQUEST_PAGES,
  GET_PAGES,
  REQUEST_SOCIAL_LINKS,
  GET_SOCIAL_LINKS,
  REQUEST_NAV,
  GET_NAV
} from './actions';

const initialState = Immutable({
  items: [],
  isFetching: false
})

export function config(state = initialState, action) {
  switch (action.type) {
    case GET_CONFIG :
      return Immutable(state).merge({
        items: action.payload.config[0],
        isFetching: false
      })
    case REQUEST_CONFIG :
      return Immutable(state).merge({
        isFetching: true
      })
    default:
      return state;
  }
}

export function pages(state = initialState, action) {
  switch (action.type) {
    case GET_PAGES :
      return Immutable(state).merge({
        items: action.payload.pages,
        isFetching: false
      })
    case REQUEST_PAGES :
      return Immutable(state).merge({
        isFetching: true
      })
    default:
      return state;
  }
}

export function socialLinks(state = initialState, action) {
  switch (action.type) {
    case GET_SOCIAL_LINKS :
      return Immutable(state).merge({
        items: action.payload.socialLinks,
        isFetching: false
      })
    case REQUEST_SOCIAL_LINKS :
      return Immutable(state).merge({
        isFetching: true
      })
    default:
      return state;
  }
}

export function nav(state = initialState, action) {
  switch (action.type) {
    case GET_NAV :
      return Immutable(state).merge({
        items: action.payload.nav,
        isFetching: false
      })
    case REQUEST_NAV :
      return Immutable(state).merge({
        isFetching: true
      })
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  config,
  pages,
  socialLinks,
  nav,
  routing: routerReducer
});

export default rootReducer;
