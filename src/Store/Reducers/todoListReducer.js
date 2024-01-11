import { 
    ADD_TODO,
    TOGGLE_TODO,
    TOGGLE_ALL,
    UNTOGGLE_ALL,
    TEXT_CHANGE
} from "../constants";

const initState = {
    todos: [],
    text: ""
}
export default function todoListReducer(preState = initState, action) {
    switch (action.type) {
        case ADD_TODO:
           let count = preState.todos.length
           let newTodo = { id: count, todo: action.data, isCompleted: false }
           return {
            ...preState,
            todos: [newTodo, ...preState.todos],
            text: ""
           }
        case TOGGLE_TODO:
            let todoId = action.data
            return {
                ...preState,
                todos: preState.todos.map((todo) => {
                    if (todo.id == todoId) {
                        console.log(todo, todo.isCompleted, !todo.isCompleted)
                        const newTodo = { ...todo, isCompleted: !todo.isCompleted }
                        console.log(newTodo)
                        return newTodo
                    }
                    return { ...todo }
                })
            }
        case TOGGLE_ALL:
            return {
                ...preState,
                todos: preState.todos.map((todo) => {
                  return  { ...todo, isCompleted: true }
                })
            }
        case UNTOGGLE_ALL:
            return {
                ...preState,
                todos: preState.todos.map((todo) => {
                    return { ...todo, isCompleted: false }
                })
            }
        case TEXT_CHANGE: return {
            ...preState,
            text: action.data
        }
        default: return preState
    }
}