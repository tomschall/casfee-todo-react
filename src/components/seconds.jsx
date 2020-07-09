import React, { Component } from 'react';

class Seconds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      second: 0,
    };
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  setTimer = () => {
    this.myInterval = setInterval(() => {
      this.setState({ second: this.state.second + 1 });
      console.log('myInterval', this.state.second);
    }, 1000);
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.state.second}</span>
      </React.Fragment>
    );
  }
}

export default Seconds;
