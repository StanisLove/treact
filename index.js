import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact strict render={() => <div>Main page</div>} />
      <Route path='/about' render={() => <div>About page</div>} />
      <Route exact path='/products' render={() => <div>Products page</div>} />
      <Route path='/products/:id' render={({ match }) => (
        <div>Product #{match.params.id}</div>
      )} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
