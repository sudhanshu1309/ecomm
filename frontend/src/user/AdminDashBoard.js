import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-light">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-link text-info">
              Create Category
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/categories" className="nav-link text-info">
              Manage Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-link text-info">
              Create Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-link text-info">
              Manage Products
            </Link>
          </li>
          {/* <li className="list-group-item">
            <Link to="/admin/orders" className="nav-link text-info">
              Manage Orders
            </Link>
          </li> */}
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header text-info">Admin Information</h4>
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
    <Base
      title="Welcome admin"
      description="Manage store from here"
      className="container bg-success p-4"
    >
      <div className="row">
        <div className="col-4">{adminLeftSide()}</div>
        <div className="col-8">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashboard;
