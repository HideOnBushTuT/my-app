import React, { Component } from 'react'
import Count from './Components'
import TodoList from './Components/Todo List'

export default class App extends Component {
  render() {
    return <div>
      <Count />
      <Count />
      <TodoList />
    </div>
  }
}
