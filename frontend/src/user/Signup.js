import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const signUpForm = () => {
    return (
      <div class="row">
        <div class="col md-6 offset-sm-3 text-left">
          <form>
            <div class="form-group">
              <lable class="text-white">Name</lable>
              <input className="form-control" type="text" />
            </div>
            <div class="form-group">
              <lable class="text-white">Email</lable>
              <input className="form-control" type="email" />
            </div>
            <div class="form-group">
              <lable class="text-white">Password</lable>
              <input className="form-control" type="password" />
            </div>
            <button class="btn btn-success btn-block">Submit</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Signup Page" description="A page for user to signup!">
      {signUpForm()}
    </Base>
  );
};

export default Signup;
