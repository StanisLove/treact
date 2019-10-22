import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from '~/src/Counter';
import Person from '~/src/Person';
import EventListener from '~/src/EventListener';


ReactDOM.render(
  <div>
    <Counter value={1} />
    <Person />
    <EventListener />
  </div>,
  document.getElementById('root')
);
