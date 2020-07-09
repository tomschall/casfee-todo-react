import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <ul className="navigation">
          <li>
            <Link to="/myname">
              <span>MyName</span>
            </Link>
          </li>
          <li>
            <Link to="/seconds">
              <span>Seconds</span>
            </Link>
          </li>
          <li>
            <Link to="/stream">
              <span>Stream</span>
            </Link>
          </li>
          <li>
            <Link to="/todo">
              <span>Todo</span>
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navigation;
