import React, { Component } from 'react';

import Tasks from './todos_tasks';

class TodosMain extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1'},
      { _id: 2, text: 'This is task 2'},
      { _id: 3, text: 'This is task 3'},
    ];
  }

  renderTasks() {
    return this.getTasks().map((tasks) => (
      <Tasks key={tasks._id} tasks={tasks} />
    ));
  }

  render() {
    return (
      <div>
        <h1>TodosMain</h1>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
};

export default TodosMain;
