import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>Hello, world!</div>
);

console.log(App());

ReactDOM.render(
  {
    $$typeof: Symbol.for('react.element'),
    props: {
      children: 'Hello, world!'
    },
    type: 'div',
    ref: null
  },
  document.getElementById('root')
);
