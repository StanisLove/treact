const express = require('express');

require('@babel/register');
require('@babel/polyfill');

const render = require('./render').default;

const app = express();

app.get('/', async (req, res) => {
  const response = `
    <!doctype html>
    <html>
      <head>
        <title>Hello, React!</title>
      </head>
      <body>
        <div id="root">${await render()}</div>
      </body>
    </html>
  `;

  res.send(response);
});

app.listen(3001, () => console.log('Server is listening on 3001')); // port and callback
