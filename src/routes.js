import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import TodosPage from './containers/todo/TodosPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TodosPage}/>
    <Route path="/:filter" component={TodosPage}/>
  </Route>
);