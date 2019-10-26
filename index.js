import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  mainPath, aboutPath, catalogPath, productPath
} from '~/src/helpers/routes';
import ProductPage from '~/src/components/views/Product';
import AboutPage   from '~/src/components/views/About';
import MainPage    from '~/src/components/views/Main';
import CatalogPage from '~/src/components/views/Catalog';

const App = () => (
  <Router>
    <Switch>
      <Route path={mainPath()}    component={MainPage} exact strict />
      <Route path={aboutPath()}   component={AboutPage} />
      <Route path={catalogPath()} component={CatalogPage} exact />
      <Route path={productPath()} render={({ match }) => (
        <ProductPage id={match.params.id} />
      )} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
