import React from 'react';
import { observer } from "mobx-react";



@observer
export default class TodoList extends React.Component {
  createNew(e)
  {
    if(e.which === 13)
    {
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  filter(e)
  {
    this.props.store.filter = e.target.value
  }

  toggleComplete(todo)
  {
    todo.complete = !todo.complete
  }

  deleteItem(todo)
  {
    this.props.store.clearSelected(todo.id)
  }

  render()
  {
    const{ clearComplete, filter, filteredTodos, todos} = this.props.store

    const todoLis = filteredTodos.map(todo => (
      <li key={todo.id}>


      <div className = "round">
        <input className="checkboxStyling" type="checkbox" id="cbx" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
      </div>

      <div className = "todoListTitleContainer">
        <span className= "todoListTitle" >{todo.value}</span>
        <button href ="#" onClick={this.deleteItem.bind(this, todo)} > X </button>
      </div>

      </li>
    ))
    return <div>

    <div className="App">
        <div className="todo-list-wrap">
          <div className="header-background">
            <div className="header-text">
              Things To Do
            </div>
          </div>
          <div className="todo-list-content">

            <input className="new" onKeyPress={this.createNew.bind(this)} placeholder="What needs to be done?"/>
            <input className="filter" value={filter} onChange={this.filter.bind(this)} placeholder="Search Tasks"/>

            <ul>{todoLis}</ul>

            <div className = "clearSelected">
              <a href="#" onClick={clearComplete}>Clear Complete</a>
            </div>

          </div>
        </div>
    </div>

      </div>
  }
}
