import { 
    ADD_TODO, 
    TOGGLE_TODO,
    TOGGLE_ALL,
    UNTOGGLE_ALL,
    TEXT_CHANGE
} from "../constants";

export const addTodoAction = data => ({ type: ADD_TODO, data })
export const toggleTodoAction = data => ({ type: TOGGLE_TODO, data })
export const toggleAll = () => ({ type: TOGGLE_ALL })
export const untoggleAll = () => ({ type: UNTOGGLE_ALL })
export const textChange = (data) => ({ type: TEXT_CHANGE, data })
