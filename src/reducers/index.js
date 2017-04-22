import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  routing: routerReducer
});

export default rootReducer;