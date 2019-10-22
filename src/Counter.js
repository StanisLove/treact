import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const delta = event.shiftKey ? 10 : 1;
    this.setState((prevState) => ({ value: prevState.value + delta }));
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.value}</h1>
        <button onClick={this.handleClick}>
          Increment
        </button>
      </div>
    );
  }
}

Counter.defaultProps = {
  value: 0
};

export default Counter;
