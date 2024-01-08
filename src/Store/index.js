import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import count from "./Reducers/countReducer";

export default createStore(count, applyMiddleware(thunk))