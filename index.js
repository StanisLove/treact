import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch, NavLink
} from 'react-router-dom';
import './index.css';
import {
  mainPath, aboutPath, catalogPath, productPath
} from '~/src/helpers/routes';
import routes from '~/src/routes';

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

const App = () => (
  <Router>
    <Fragment>
      <ul>
        <li><NavLink to={mainPath()} exact>Main</NavLink></li>
        <li><NavLink to={aboutPath()}>About</NavLink></li>
        <li><NavLink to={catalogPath()}>Catalog</NavLink></li>
      </ul>
      <Switch>
        {routes.map((route, key) => RouteWithSubroutes(route, key))}
      </Switch>
    </Fragment>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
