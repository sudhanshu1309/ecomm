import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";

const UserDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const userName = "Welcome " + name;

  const userRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header text-info">User Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2 text-danger">Name:</span>{" "}
            {name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2 text-danger">Email:</span>
            {email}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2 text-danger">Role: </span>
            {role ? "Admin" : "User"}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base title={userName} description="Manage your account from here">
      <div className="row">
        <div className="col-12">{userRightSide()}</div>
      </div>
    </Base>
  );
};

export default UserDashboard;
