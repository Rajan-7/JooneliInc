import React, { useState } from "react";
import axios from "axios";
import "./Admin.css";
import { useAuth } from "../store/auth";

const IURL = "http://localhost:5005/api/image/images";
const CURL = "http://localhost:5005/api/admin/cnews";

const AdminCnews = () => {
  const [news, setNews] = useState({
    image: "",
    heading: "",
    description: "",
    date: "",
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
        CURL,
        {
          description: news.description,
          heading:news.heading,
          date: news.date,
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
      console.log(`From FrontEnd Cnews:`, error);
    }
  };
  return (
    <section className="admin-user-section b-section">
      <section className="admin-user-section">
        <div className="container heading">
          <h1>Corporate News Form</h1>
        </div>
        <div className="container grid grid-two-cols">
          {/* Update form */}
          <section className="form-section  blog-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="image">Corporate Image</label>
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
                <label htmlFor="heading">heading</label>
                <input
                  type="text"
                  name="heading"
                  id="heading"
                  required
                  autoComplete="off"
                  placeholder="Heading of the news..."
                  value={news.heading}
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
                  value={news.description}
                  onChange={handleChange}
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
                  value={news.date}
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

export default AdminCnews;
