import { type } from "@testing-library/user-event/dist/type";
import { 
    ADD_TODO,
    TOGGLE_TODO,
    TOGGLE_ALL,
    UNTOGGLE_ALL
} from "../constants";

const initState = {
    todos: []
}
export default function todoListReducer(preState = initState, action) {
    switch (action.type) {
        case ADD_TODO:
           let count = preState.todos.length
           let newTodo = { id: count, todo: action.data, isCompleted: false }
           return {
            ...preState,
            todos: [newTodo, ...preState.todos]
           }
        case TOGGLE_TODO:
            let todoId = action.data
            return {
                ...preState,
                todos: preState.todos.map((todo) => {
                    if (todo.id == todoId) {
                        return { isCompleted: !todo.isCompleted, ...todo }
                    }
                    return todo
                })
            }
        case TOGGLE_ALL:
            return {
                ...preState,
                todos: preState.todos.map((todo) => {
                  return  { isCompleted: true, ...todo }
                })
            }
        case UNTOGGLE_ALL:
            return {
                ...preState,
                todos: preState.todos.map((todo) => {
                    return { isCompleted: false, ...todo }
                })
            }
        default: return preState
    }
}