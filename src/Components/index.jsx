import { connect } from "react-redux"
import CounterUI from "./CounterUI"
import { 
    incrementAction,
    decrementAction
} from "../Store/Action/count"

const mapStateToProps = (state) => ({ count: state })
const mapDispatchToProps = (dispatch) => ({
    increment: (number) => {
        dispatch(incrementAction(number))
    },
    decrement: (number) => {
        dispatch(decrementAction(number))
    }
})

export default connect(mapStateToProps, { incrementAction, decrementAction })(CounterUI)