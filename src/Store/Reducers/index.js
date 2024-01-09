import { combineReducers } from "redux";
import count from "./countReducer";
import todoListReducer from "./todoListReducer";

const redcuers = combineReducers({ 
    counter: count,
    todos: todoListReducer
 })

export default redcuers