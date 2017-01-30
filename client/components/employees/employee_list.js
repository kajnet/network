import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 12;

const EmployeeList = (props) => {
  // console.log(props.employees);
  return (
    <div>
      <div className="employee-list">
        {props.employees.map(employee => <EmployeeDetail key={employee._id} employee={employee} />)}
      </div>
      <button onClick={() => Meteor.subscribe('employees', 24) }
         className="btn btn-primary btn-block btn-loadmore">
         Show All
       </button>
    </div>
  );
};

export default createContainer(() => {
  // Setting up a subscription
  Meteor.subscribe('employees', PER_PAGE);

   // Return an object that will be sent to EmployeeList as props
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);
