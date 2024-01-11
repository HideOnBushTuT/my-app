import { createStore, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import logger from "redux-logger"
import redcuers from './Reducers'

export default createStore(redcuers, applyMiddleware(thunk, logger))