import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  todos: todoReducer,
  routing: routerReducer
});

export default rootReducer;