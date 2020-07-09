import React, { Component } from 'react';

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
      </React.Fragment>
    );
  }
}

export default MyName;
