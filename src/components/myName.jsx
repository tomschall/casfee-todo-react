import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, addTodo, toggleTodo } from '../actions';
import { getTodosState } from '../selectors';

class MyName extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  setName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <input
            placeholder="My name"
            onInput={(e) => this.setName(e.target.value)}
          />
          {this.state.name && <span>Hi {this.state.name}!</span>}
        </div>
        <div>
          <ul>
            {this.props.todos.map((todo) => (
              <li>{todo.name}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default connect((state) => ({ todos: getTodosState(state) }))(MyName);
