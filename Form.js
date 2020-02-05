import React, { Component } from 'react';
import Person from './Person';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.currentTarget.value });
  }

  render() {
    return (
      <div>
        <input type='text' onChange={ this.handleChange } />
        <Person name={ this.state.name } />
      </div>
    );
  }
}
