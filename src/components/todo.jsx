import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todos: [
        { name: 'Milch kaufen', done: true },
        { name: 'Rasen mähen', done: false },
        { name: 'Todo App Coden', done: true },
        { name: 'Zug fahren', done: false },
        { name: 'Schlafen gehen', done: true },
        { name: 'Ferien', done: true },
        { name: 'Kochen', done: true },
        { name: 'Lernen', done: false },
      ],
    };
  }

  toggleTodo = (e) => {
    const todos = this.state.todos;
    const [todo] = this.state.todos.filter(
      (todo) => todo.name === e.currentTarget.name,
    );
    todo.done = !todo.done;
    todos[this.state.todos.indexOf(todo)] = todo;
    this.setState({ todos });
  };

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value === '') return;
      const todos = this.state.todos;
      console.log('e', e.currentTarget.value);
      todos.push({ name: e.currentTarget.value, done: false });
      this.setState({ todos, todo: '' });
    }
  };

  _handleOnChange = (e) => {
    this.setState({ todo: e.currentTarget.value });
  };

  _renderTodos = (done) => {
    {
      return this.state.todos
        .filter((todo) => {
          return todo.done === done;
        })
        .map((todo, i) => {
          return (
            <li key={i}>
              <input
                type="checkbox"
                name={todo.name}
                onChange={this.toggleTodo}
                checked={todo.done}
              />
              {todo.name}
            </li>
          );
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="todo-container">
          <ul className="todo-list">{this._renderTodos(true)}</ul>
        </div>
        <div>
          <input
            placeholder="Neues Todo"
            onKeyDown={this._handleKeyDown}
            value={this.state.todo}
            onChange={this._handleOnChange}
          />
        </div>
        <div className="todo-container">
          <ul className="todo-list">{this._renderTodos(false)}</ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Todo;
