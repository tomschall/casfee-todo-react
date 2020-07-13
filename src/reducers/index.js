import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';
import todoReducer from './todo';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  todos: todoReducer,
});

export default allReducers;
