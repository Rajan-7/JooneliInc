import React, { useState } from "react";
import axios from "axios";
import "./Admin.css";
import { useAuth } from "../store/auth";

const IURL = "http://localhost:5005/api/image/images";
const URL = "http://localhost:5005/api/admin/inews";

const AdminInews = () => {
  const [news, setNews] = useState({
    image: "",
    description: "",
    name: "",
    type: "",
  });

  const [img, setImg] = useState([]);
  const { authorizationToken } = useAuth();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNews({
      ...news,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("image", img);

      const imgResponse = await axios({
        method: "post",
        data: formdata,
        url: IURL,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const response = await axios.post(
        URL,
        {
          description: news.description,
          name: news.name,
          type: news.type,
          image: imgResponse.data.url,
        },
        {
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      // setImg([]);
      if (response) {
        setNews({ image: "", description: "", name: "", type: "" });
      }
    } catch (error) {
      console.log(`From FrontEnd Inews:`, error);
    }
  };
  return (
    <section className="admin-user-section b-section">
      <section className="admin-user-section">
        <div className="container heading">
          <h1>Image News Form</h1>
        </div>
        <div className="container grid grid-two-cols">
          {/* Update form */}
          <section className="form-section  blog-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="image">News Image</label>
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
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Description..."
                  cols="25"
                  rows="5"
                  value={news.description}
                  onChange={handleChange}
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
                  value={news.name}
                  onChange={handleChange}
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
                  value={news.type}
                  onChange={handleChange}
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
