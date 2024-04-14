import React from "react";

const AdminInews = () => {
  return (
    <section className="admin-user-section b-section">
      <section className="admin-user-section">
        <div className="container heading">
          <h1>Image News Form</h1>
        </div>
        <div className="container grid grid-two-cols">
          {/* Update form */}
          <section className="form-section  blog-form">
            <form>
              <div>
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  required
                  accept="image"
                  autoComplete="off"
                  placeholder="Choose your image"
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Description..."
                  cols="25"
                  rows="5"
                ></textarea>
              </div>
              <div>
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="off"
                  placeholder="Name of the blogs..."
                />
              </div>
              <div>
                <label htmlFor="type">Type</label>
                <input
                  type="text"
                  name="type"
                  id="type"
                  autoComplete="off"
                  required
                  placeholder="Company Type/Designation..."
                />
              </div>
              <div className="b_btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </section>
  );
};

export default AdminInews;
