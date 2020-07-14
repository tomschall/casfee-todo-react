import React, { Component } from 'react';
import Counter from './counter';
import { connect } from 'react-redux';
import { increment, decrement, addTodo, toggleTodo } from '../actions';
import { getTodosState } from '../selectors';
import MyName from './myName';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };
  }

  _toggleTodo = (id) => {
    this.props.toggleTodo(id);
  };

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value === '') return;
      this.props.addTodo(e.currentTarget.value);
      this.setState({ todo: '' });
    }
  };

  _handleOnChange = (e) => {
    this.setState({ todo: e.currentTarget.value });
  };

  _renderTodos = (done) => {
    {
      return this.props.todos
        .filter((todo) => {
          return todo.done === done;
        })
        .map((todo, i) => {
          return (
            <li key={i}>
              <input
                key={i}
                type="checkbox"
                name={todo.name}
                onChange={() => this._toggleTodo(todo.id)}
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
        {/* <Counter /> */}
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </React.Fragment>
    );
  }
}

export default connect((state) => ({ todos: getTodosState(state) }), {
  increment,
  decrement,
  addTodo,
  toggleTodo,
})(Todo);
