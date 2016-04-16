import { combineReducers } from 'redux';
import Immutable from 'seamless-immutable';

// Import actions
import { REQUEST_CONFIG, GET_CONFIG, REQUEST_CONFIG, REQUEST_LANG, GET_LANG, REQUEST_LANG, REQUEST_PAGES, GET_PAGES, REQUEST_PAGES, REQUEST_SOCIAL_LINKS, GET_SOCIAL_LINKS, REQUEST_SOCIAL_LINKS } from './actions';

const configInitialState = Immutable({
  items: [],
  isFetching: false
})

export function config(state = configInitialStatem action) {
  switch (action.type) {
    case GET_CONFIG :
      return Immutable(state).merge({
        items: action.payload.config,
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

const rootReducer = combineReducers({
  config
})

export default rootReducer;
