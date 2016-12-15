import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  componentDidMount() {
    // Render Blaze accounts form
    // Find rendered div and place form into div
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    // Find forms created and destroy them
    // Need to clean up forms ourselves
    Blaze.remove(this.view);
  }
  render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;
