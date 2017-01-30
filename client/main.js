import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import DocsMain from './components/docs/docs_main';
import DocsList from './components/docs/docs_list';
import { Docs } from '../imports/collections/docs';
import Todo from './components/todos/todo';
import EmployeeList from './components/employees/employee_list';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={DocsList} />
      <Route path="employees" component={EmployeeList} />
      <Route path="docs/:docId" component={DocsMain} />
      {/* <Route path="todo" component={Todo} /> */}
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
