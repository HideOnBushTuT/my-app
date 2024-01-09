import { connect } from "react-redux"
import { 
    toggleAll,
    untoggleAll
} from "../../../Store/Action/todo"
import TodoHeader from "./TodoHeader"

export default connect((state) => {}, { toggleAll, untoggleAll })(TodoHeader)