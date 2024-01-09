import { INCREMENT, DECREMENT } from "../constants";

export const incrementAction = data => ({ type: INCREMENT, data })
export const decrementAction = data => ({ type: DECREMENT, data })