import React from "react";
import API from "../backend";
import "../styles.css";
import Base from "./Base";

const Home = () => {
  console.log("API IS", API);
  return (
    <Base title="Home Page" description="Welcome to the t-shirt store">
      <div className="row">
        <div class="col-4">
          <button class="btn btn-success">Test</button>
        </div>
        <div class="col-4">
          <button class="btn btn-success">Test</button>
        </div>
        <div class="col-4">
          <button class="btn btn-success">Test</button>
        </div>
      </div>
    </Base>
  );
};

export default Home;
