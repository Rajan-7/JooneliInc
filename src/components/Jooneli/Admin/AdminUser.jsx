import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import axios from "axios";
import "./Admin.css";

const URL = "http://localhost:5005/api/admin/users";

const AdminUser = () => {
  const [users, setUsers] = useState([]);

  const { authorizationToken } = useAuth();


  // Admin -> Deleting The User
  const deleteUser = async(id)=>{
    try {
      const response = await axios.delete(`http://localhost:5005/api/admin/users/delete/${id}`,{
        headers:{
          Authorization: authorizationToken,
        }
      })
      if(response){
        getAllUser();
      }
    } catch (error) {
      console.log(`While Deleting The Users:${error}`);
    }
  }
  // Admin -> Getting All Users Data
  const getAllUser = async () => {
    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response) {
        // Remember!!
        const data = response.data;
        setUsers(data);
      }
    } catch (error) {
      console.log(`While Fetching Data: ${error}`);
    }
  };

  useEffect(() => {
    getAllUser();
  },[]);
  return (
    <section className="admin-user-section">
      <section className="admin-user-section">
        <div className="container heading">
          <h1>Users Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curElm, ind) => {
                const { username, email, contact } = curElm;
                return (
                  <tr key={ind}>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{contact}</td>
                    <td>
                      <Link to={`/admin/users/${curElm.id}/edit`} className="btn">Edit</Link>
                    </td>
                    <td>
                      <button className="btn" onClick={()=>deleteUser(curElm.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default AdminUser;
