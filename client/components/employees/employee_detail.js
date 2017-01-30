import React from 'react';

const EmployeeDetail = ({ employee }) => {
  // By doing { employee } rather than props we are able to use
  // employee.avatar etc. rather than props.employee.avatar over and over

  // Taking it one step further we can also remove employee with help from ES6
  const { name, email, phone, avatar } = employee;
  // We've gone from having to repeat a lot to this
  // props.employee.avatar - this is what it looked like
  return (
    <div className="thumbnail">
      <img className="img-rounded" src={avatar} />
      <div className="caption">
        <h3>{name}</h3>
        <ul className="list-group">
          {/* <li className="list-group-item">Job: {job}</li> */}
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDetail;
