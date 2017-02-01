import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component {
  onDocClick() {
    event.preventDefault();

    Meteor.call('docs.insert', (error, docId) => {
      browserHistory.push("/docs/" + docId);
    });
  }
  render() {
    return (
      <nav className="nav navbar-inverse">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Network</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <a href="#" onClick={this.onDocClick.bind(this)}><span className="glyphicon glyphicon-list-alt"></span> New Document</a>
          </li>
          <li>
            <Link to="/todos"><span className="glyphicon glyphicon-ok"></span> Todos</Link>
          </li>
          <li>
            <Link to="/employees"><span className="glyphicon glyphicon-user"></span> Users</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#"><span className="glyphicon glyphicon-user"></span> Profile</a>
          </li>
          <li>
            <Accounts />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
