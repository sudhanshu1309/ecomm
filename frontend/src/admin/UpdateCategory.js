import React from "react";
import Base from "../core/Base";

const UpdateProduct = () => {
  const myCategoryForm = () => {
    return (
      <form>
        <div class="form-group">
          <p class="lead">Enter the new category</p>
          <input
            type="text"
            className="form-control my-3"
            // onChange={handleChange}
            // value={name}
            autoFocus
            required
            placeholder="For ex. Summer"
          />
          <button /*onClick={onSubmit}*/ class="btn btn-outline-info">
            Update Category
          </button>
        </div>
      </form>
    );
  };

  return (
    <Base title="Welcome Admin" description="Category Updation Page">
      <h1 class="text-white">Update Category Here</h1>
      {myCategoryForm()}
    </Base>
  );
};

export default UpdateProduct;
