import React, { useState } from "react";
import axios from "axios";
import "./Admin.css";
import { useAuth } from "../store/auth";

const IURL = "http://localhost:5005/api/image/images";
const BURL = "http://localhost:5005/api/admin/blogs";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState({
    name: "",
    description: "",
    image: "",
  });
  const [img, setImg] = useState([]);
  const { authorizationToken } = useAuth();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setBlogs({
      ...blogs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("image", img);

      const imgResponse = await axios({
        url: IURL,
        data: formdata,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const response = await axios.post(
        BURL,
        {
          name: blogs.name,
          description: blogs.description,
          image: imgResponse.data.url,
        },
        {
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      console.log(response);
      setBlogs({ name: "", description: "", image: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="admin-user-section b-section">
      <section className="admin-user-section">
        <div className="container heading">
          <h1>Blogs Form</h1>
        </div>
        <div className="container grid grid-two-cols">
          {/* Update form */}
          <section className="form-section  blog-form">
            <form onSubmit={handleSubmit}>
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
                  onChange={(e) => setImg(e.target.files[0])}
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
                  placeholder="Name of the blogs..."
                  value={blogs.name}
                  onChange={handleChange}
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
                  value={blogs.description}
                  onChange={handleChange}
                ></textarea>
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

export default AdminBlogs;
