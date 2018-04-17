import { combineReducers } from 'redux';
import ReducerPost from './reducer_post'
import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  ReducerPost,form
});

export default rootReducer;
