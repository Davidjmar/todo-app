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

  countReturner()
  {
    var t = this.props.store.countLI()
  }

  render()
  {
    const{ clearComplete, filter, filteredTodos, todos} = this.props.store
    const todoLis = filteredTodos.map(todo => (
      <li key={todo.id} id = "LII">
      <div className = "todoListHolder">
        <input className="checkboxStyling" type="checkbox" id="cbx" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
          <span className= "todoListTitle" >{todo.value}</span>
          <div className = "deleteButton">
            <button href ="#" onClick={this.deleteItem.bind(this, todo)} > X </button>
          </div>
      </div>
      </li>
    ))
    const countLI = () => {
      var count=0
      for (var i = 0; i<todos.length; ++i)
      {
        if(todos[i].complete == false) {
          count++
        }
      }
      return count
    }
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

            <ul id="UL">{todoLis}</ul>

            <div className="filterHolder">
              <input className="filter" value={filter} onChange={this.filter.bind(this)} placeholder="Search Tasks"/>
            </div>
          </div>
          <div className = "clearSelected">

            <div className="tasksLeftHolder">
              <span className="tasksLeft" href="#"> Tasks Left: {countLI()} </span>
              <a className="clearComplete" href="#" onClick={clearComplete}>Clear Completed Tasks</a>
            </div>

          </div>
        </div>
    </div>
    </div>
  }
}
