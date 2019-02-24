import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="todo-list-wrap">
          <div className="header-background">
            <div className="header-text">
              Things To Do
            </div>
              <div className="todo-list-content">
                <form>
                  <input placeholder="What needs to be done?" />
                </form>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
