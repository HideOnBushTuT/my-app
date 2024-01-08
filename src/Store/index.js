import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import countReducer from "./Reducers/countReducer";

export default createStore(countReducer, applyMiddleware(thunk))