import React from 'react';
import browserContext from '~/browserContext';

const Buy = () => (
  <browserContext.Consumer>
    {
      (browser) => (
        browser.getPlatform().type == 'desktop' ? (
          <button>Desktop Buy</button>
        ) : (
          <button>Mobile Buy</button>
        )
      )
    }
  </browserContext.Consumer>
);

export default Buy;
