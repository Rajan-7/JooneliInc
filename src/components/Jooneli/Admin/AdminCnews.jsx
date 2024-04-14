import React from "react";

const AdminCnews = () => {
  return (
    <section className="admin-user-section b-section">
      <section className="admin-user-section">
        <div className="container heading">
          <h1>Corporate News Form</h1>
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
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  autoComplete="off"
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

export default AdminCnews;
