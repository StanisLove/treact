import React, { Component } from 'react';

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'Unknown',
      lastName: 'Unknown'
    };

    /*this.setField = this.setField.bind(this);*/
  }

  setField(inputName, event) {
    this.setState({
      [inputName]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>First name: {this.state.firstName}</li>
          <li>Last name: {this.state.lastName}</li>
        </ul>
        <label>First name </label>
        <input
          value={this.state.firstName}
          onChange={(event) => this.setField('firstName', event)}
        />
        <label>Last name </label>
        <input
          value={this.state.lastName}
          onChange={(event) => this.setField('lastName', event)}
        />
      </div>
    );
  }
}

export default Person;
