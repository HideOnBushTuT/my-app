import { connect } from "react-redux"
import TextInput from "./textInput"
import { addTodoAction, textChange } from "../../../Store/Action/todo"

const mapStateToProps = (state) => ({ 
    text: state.todos.text
})
const mapDispatchToProps = (dispatch) => ({
    addTodo: (name) => {
        dispatch(addTodoAction(name))
    },
    textChange: (text) => {
        dispatch(textChange(text))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(TextInput)
