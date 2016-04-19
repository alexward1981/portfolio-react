import Immutable from 'seamless-immutable';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import actions
import { REQUEST_CONFIG, GET_CONFIG } from './actions';

const configInitialState = Immutable({
  items: [],
  isFetching: false
})

export function config(state = configInitialState, action) {
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

const rootReducer = combineReducers({
  config,
  routing: routerReducer
});

export default rootReducer;
