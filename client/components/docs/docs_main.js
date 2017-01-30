import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Docs } from '../../../imports/collections/docs';
import DocsEditor from './docs_editor';
import DocsViewer from './docs_viewer';
import DocsShare from './docs_share';

class DocsMain extends Component {
  render() {
    // console.log(this.props.params.docId);
    // console.log(this.props.doc);
    if (!this.props.doc) {
      return <div className="alert alert-danger">Need to be logged in</div>;
    }

    return (
      <div>
        {/* Taking the doc model and passing it into
           the DocsEditor as a prop called doc */}
        <DocsEditor doc={this.props.doc} />
        <DocsViewer doc={this.props.doc} />
        <DocsShare doc={this.props.doc} />
      </div>
    );
  }
}

export default createContainer((props) => {
  const { docId } = props.params;
  Meteor.subscribe('docs');
  Meteor.subscribe('sharedDocs');

  return { doc: Docs.findOne(docId) };
}, DocsMain);
