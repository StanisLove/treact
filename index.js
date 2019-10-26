import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  mainPath, aboutPath, catalogPath, productPath
} from '~/helpers/routes';

const App = () => (
  <Router>
    <Switch>
      <Route path={mainPath()} exact strict render={() => <div>Main page</div>} />
      <Route path={aboutPath()} render={() => <div>About page</div>} />
      <Route exact path={catalogPath()} render={() => <div>Products page</div>} />
      <Route path={productPath()} render={({ match }) => (
        <div>Product #{match.params.id}</div>
      )} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
