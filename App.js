import React, { Component } from 'react';

class childApp extends Component {
  constructor(props) {
    console.log('child', 'constructor');
    super(props);
    this.state = { stateProp: 'newValue' };
  }

  componentDidMount() {
    console.log('child', 'componentDidMount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('child', 'getSnapshotBeforeUpdate', prevProps, prevState);
    return null;
  }

  getDerivedStateFromProps(props, state) {
    console.log('child', 'getDerivedStateFromProps', props, state);
    return state;
  }

  shouldComponentUpdate() {
    console.log('child', this.shouldComponentUpdate);
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('child', 'componentDidUpdate', prevProps, prevState, snapshot);
  }
}

class App extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = { stateProp: 'oldValue' };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState);
    return null;
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state);
    return state; // Can return null, or any value
  }

  shouldComponentUpdate(props, state) {
    console.log('shouldComponentUpdate', props, state);
    return true; // Important to return true
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot);
  }

  render() {
    console.log('render');
    return (
      <div>
        <button onClick={() =>this.setState({ stateProp: 'newValue' }) } />
        { /* <ChildApp stateProp={this.state.stateProp} /> */ }
      </div>
    );
  }
}

export default App;
