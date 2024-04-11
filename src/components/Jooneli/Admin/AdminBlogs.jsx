import React from "react";
import "./Admin.css"

const AdminBlogs = () => {
  return (
    <section className="admin-user-section">
      <section className="admin-user-section">
        <div className="container heading">
          <h1>Blogs Form</h1>
        </div>
        <div className="container grid grid-two-cols">
          {/* Update form */}
          <section className="form-section">
            <form>
              <div>
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  required
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="message">Description</label>
                <textarea
                  name="message"
                  id="message"
                  cols="25"
                  rows="5"
                ></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </section>
  );
};

export default AdminBlogs;
