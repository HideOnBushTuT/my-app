import { ADD_PERSON } from "../constants";

const initState = [{ id: "001", name: "sunset", age: 28 }]

export default function persons(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
}