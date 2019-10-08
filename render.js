import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './App';
import getRepos from './src/github';

const render = async () => {
  const repos = await getRepos();

  return ReactDOMServer.renderToString(<App repos={ repos } />);
};

export default render;
