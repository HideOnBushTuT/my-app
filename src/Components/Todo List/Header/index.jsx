import { connect } from "react-redux"
import { 
    toggleAll,
    untoggleAll
} from "../../../Store/Action/todo"
import TodoHeader from "./TodoHeader"

const mapStateToProps = (state) => {
    const allCount = state.todos.todos.length
    if (allCount == 0) {
        return {
            isAllCompleted: false
        }
    }
    const completedCount = state.todos.todos.filter((todo) => todo.isCompleted).length
    return {
        isAllCompleted: completedCount == allCount
    }
}


export default connect(mapStateToProps, { toggleAll, untoggleAll })(TodoHeader)