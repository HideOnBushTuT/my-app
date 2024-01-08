import React, { Component} from "react";
import store from "../Store";
import { 
    increment,
    decrement
} from "../Store/Action/count";

export default class Count extends Component {
    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate()
        })
    }

    incrementFunction = () => {
        const { value } = this.selectNumber
        store.dispatch(increment(value * 1))
    }

    decrementFunction = () => {
        const { value } = this.selectNumber
        store.dispatch(decrement(value * 1))
    }

    render() {
        return (
            <div>
              <h1>当前求和为： {store.getState()}</h1>
              <select ref={(c) => (this.selectNumber = c)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
              &nbsp;
              <button onClick={this.increment}>+</button>&nbsp;
              <button onClick={this.decrement}>-</button>&nbsp;
            </div>
          );
    }
}