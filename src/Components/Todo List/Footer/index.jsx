import { connect } from "react-redux"
import Footer from "./Footer"

const mapStateToProps = (state) => ({ 
    totalCount: state.todos.todos.length,
    completedCount: state.todos.todos.filter((todo) => todo.isCompleted).length
})

export default connect(mapStateToProps)(Footer)