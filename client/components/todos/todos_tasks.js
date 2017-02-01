import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';



// Task component - represents a single todo item
class Tasks extends Component {
  render() {
    return (
      <div></div>
      // <li>{this.props.task.text}</li>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.object.isRequired,
};
export default Tasks;
