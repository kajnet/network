import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Docs } from '../../../imports/collections/docs';
import { Link } from 'react-router';

class DocsList extends Component {
  onDocRemove(doc) {
    Meteor.call('docs.remove', doc);
  }

  renderList() {
    return this.props.docs.map(doc => {
      // The ES5 way
      const url = "/docs/" + doc._id;
      // Or do the same code as ES6
      // const url = `/docs/${doc._id}`;

      return (
        <li className="list-group-item" key={doc._id}>
          <Link to={url}>Document {doc._id}</Link>
          <span className="pull-right">
            <button className="btn btn-danger" onClick={() => this.onDocRemove(doc)}>
              Remove
            </button>
          </span>
        </li>
      );
    });
  }
  render() {
    // console.log(this.props.docs);
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('docs');
  Meteor.subscribe('sharedDocs');

  return { docs: Docs.find({}).fetch() };
}, DocsList);
