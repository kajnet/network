import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import DocsMain from './components/docs/docs_main';
import DocsList from './components/docs/docs_list';
import { Docs } from '../imports/collections/docs';
import EmployeeList from './components/employees/employee_list';
import TodosMain from './components/todos/todos_main';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={DocsList} />
      <Route path="employees" component={EmployeeList} />
      <Route path="docs/:docId" component={DocsMain} />
      <Route path="todos" component={TodosMain} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
