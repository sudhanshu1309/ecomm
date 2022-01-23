import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getCategories, deleteCategory } from "./helper/adminapicall";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const { user, token } = isAuthenticated();
  const preload = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisCategory = (categoryId) => {
    deleteCategory(categoryId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  // const successMessage = () => (
  //   <div
  //     className="alert alert-success mt-3"
  //     style={{ display: updatedProduct ? "" : "none" }}
  //   >
  //     <h4>{updatedProduct} updated successfully</h4>
  //   </div>
  // );

  return (
    <Base title="Manage categories from here" description="Update and Delete categories"
    className="bg-info">
      <h2 className="mb-4 text-center py-4">All categories</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="btn mb-3 btn-warning border border-light rounded">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          {/* <h2 className="text-center text-white mb-5">All products</h2> */}

          {categories.map((category, index) => {
            return (
              <div key={index} className="row text-center mb-2 ">
                <div className="col-4">
                  <h3 className="text-white text-left">{category.name}</h3>
                </div>
                <div className="col-4">
                  <Link
                    className=""
                    to={`/admin/category/${category._id}/${user._id}`}
                  >
                    <span className="btn btn-success rounded">Update</span>
                  </Link>
                </div>
                <div className="col-4">
                  <button
                    onClick={() => {
                      deleteThisCategory(category._id);
                    }}
                    className="btn btn-danger rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default ManageCategories;
