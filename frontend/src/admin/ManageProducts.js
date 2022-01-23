import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { deleteProduct, getProducts } from "./helper/adminapicall";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();
  const preload = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisProduct = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base title="Manage Products from here" description="Update and Delete products">
      <h2 className="mb-4 text-center">All products</h2>
      <Link className="" to={`/admin/dashboard`}>
        <span className="btn btn-dark rounded mb-3">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-left text-info my-4 mx-5">Products name</h2>

          {products.map((product, index) => (
            <div key={index} className="row text-center mb-2 ">
              <div className="col-4">
                <h3 className="text-white text-center bg-primary rounded">{product.name}</h3>
              </div>
              <div className="col-4">
                <Link
                  className="btn btn-success rounded"
                  to={`/admin/product/update/${product._id}`}
                >
                  <span className="">Update</span>
                </Link>
              </div>
              <div className="col-4">
                <button
                  onClick={() => {
                    deleteThisProduct(product._id);
                  }}
                  className="btn btn-danger rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Base>
  );
};

export default ManageProducts;
