import { connect } from "react-redux"
import { 
    toggleAll,
    untoggleAll
} from "../../../Store/Action/todo"
import TodoHeader from "./TodoHeader"

const mapStateToProps = (state) => {
    const completedCount = state.todos.todos.filter((todo) => todo.isCompleted).length
    const allCount = state.todos.todos.length
    return {
        isAllCompleted: completedCount == allCount
    }
}


export default connect(mapStateToProps, { toggleAll, untoggleAll })(TodoHeader)