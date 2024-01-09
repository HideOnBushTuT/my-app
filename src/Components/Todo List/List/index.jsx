import { connect } from "react-redux"
import { addTodoAction, toggleTodoAction } from "../../../Store/Action/todo"
import List from "./List"

const mapStateToProps = (state) => ({ todos: state.todos.todos })
const mapDispatchToProps = (dispatch) => ({
    addTodo: (name) => {
        dispatch(addTodoAction(name))
    },
    toggle: (id) => {
        dispatch(toggleTodoAction(id))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(List)