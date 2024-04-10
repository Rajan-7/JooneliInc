import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import axios from "axios";
import "./Admin.css";

const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    contact: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const params = useParams();
  console.log(params.id);
  const authorizationToken = useAuth();
  console.log(authorizationToken);

  // Fetching Single User Data
  const getSingleUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/admin/users/${params.id}`,
        {
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(`From Frontend:${error}`);
    }
  };

  // Handling update function
  const handleSubmit = async(e)=>{
    e.preventDefault();
  }

  useEffect(() => {
    getSingleUserData();
  },[]);

  return (
    <>
      <section className="contact-section">
        <div className="contact-content container">
          <h1 className="main-heading">Update User Data</h1>
        </div>
        {/* User/Update main content */}
        <div className="container grid grid-two-cols">
          {/* Update form */}
          <section className="form-section">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="contact">Contact</label>
                <input
                  type="number"
                  name="contact"
                  id="contact"
                  required
                  autoComplete="off"
                  value={data.contact}
                  onChange={handleInput}
                />
              </div>
              <div>
                <button type="submit">Update</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};

export default AdminUpdate;
