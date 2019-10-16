import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import bowser from 'bowser';
import Catalog from '~/src/Catalog';
import browserContext from './browserContext';

const getBrowser = () => (
  bowser.getParser(window.navigator.userAgent)
);

console.log(getBrowser().getPlatform().type);

ReactDOM.render(
  <browserContext.Provider value={getBrowser()}>
    <Catalog
      products = {[
        {
          key: 1,
          title: 'iPhone',
          price: 200
        },
        {
          key: 2,
          title: 'macBook',
          price: 400
        },
      ]}
    />
  </browserContext.Provider>,
  document.getElementById('root')
);
