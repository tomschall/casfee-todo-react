import React from 'react';

class Stream extends React.Component {
  constructor() {
    super();
    this.state = {
      time: Date.now(),
    };
  }

  render() {
    return <div>{this.state.time}</div>;
  }

  componentDidMount() {
    // io('http://time.ch').on('time', (time) => {
    //   this.setState({ time });
    // });
  }
}

export default Stream;
