import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../Pages';

function NoMatch({ location }) {
  const { pathname } = location;
  return (
    <div>
      <h3>
        Pagina no encontrada
        {' '}
        <code>{pathname}</code>
      </h3>
    </div>
  );
}
export default memo(() => (
  <Router>
    <Switch>
      <Route path="/" exact render={(props) => (<Layout><Home {...props} /></Layout>)} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
));
