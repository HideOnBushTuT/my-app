import React, { Component } from "react"
export default class TextInput extends Component {

    textHandler = (event) => {
        const text = event.target.value
        if (text.length == 0) {
            return
        }
        this.props.textChange(text)
    }

    keyDownHandler = (event) => {
        if (event.key != 'Enter') {
            return
        }
        const text = event.target.value
        if (text.length == 0) {
            return
        }
        this.props.addTodo(text)
    }

    render() {
        return (
            <input
                type="text" 
                value={this.props.text} 
                onChange={this.textHandler} 
                onKeyDown={this.keyDownHandler}
                placeholder="Add TODO"
            />
        )
    }
}