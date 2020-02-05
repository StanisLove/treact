import React, { Component } from 'react';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = { isLongName: false };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    return { isLongName: props.name.length > 4 } // only changed keys in state
  }

  render() {
    const { name, age } = this.props;

    return (
      <div>
        name: {name} {age && `, age: ${age}`}
        {this.state.isLongName && ' Very long name!'}
      </div>
    )
  }
}

export default Person;
