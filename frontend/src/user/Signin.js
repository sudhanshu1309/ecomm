import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const Signin = () => {
  const signInForm = () => {
    return (
      <div class="row">
        <div class="col md-6 offset-sm-3 text-left">
          <form>
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
    <Base title="Signin Page" description="A page for user to signin!">
      {signInForm()}
    </Base>
  );
};

export default Signin;
