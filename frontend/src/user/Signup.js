import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in Signup"));
  };

  const signUpForm = () => {
    return (
      <div class="row">
        <div class="col md-6 offset-sm-3 text-left">
          <form>
            <div class="form-group">
              <lable class="text-white">Name</lable>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>
            <div class="form-group">
              <lable class="text-white">Email</lable>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>
            <div class="form-group">
              <lable class="text-white">Password</lable>
              <input
                className="form-control"
                onChange={handleChange("password")}
                type="password"
                value={password}
              />
            </div>
            <button onClick={onSubmit} class="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div class="row">
        <div class="col md-6 offset-sm-3 text-left">
          <div
            class="alert alert-success"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div class="row">
        <div class="col md-6 offset-sm-3 text-left">
          <div
            class="alert alert-danger"
            style={{ display: success ? "" : "none" }}
          >
            New account created successfully!{" "}
            <Link to="/signin">Login here</Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="Signup Page" description="A page for user to signup!">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      <p class="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signup;
