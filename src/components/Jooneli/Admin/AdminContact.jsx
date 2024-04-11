import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../store/auth";
import "./Admin.css";

const URL = "http://localhost:5005/api/admin/contacts";

const AdminContact = () => {
  const [contact, setContact] = useState([]);

  const { authorizationToken } = useAuth();

  // To get contact data
  const getAllContact = async () => {
    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: authorizationToken,
        },
      });
      console.log("Contact data:", response);
      setContact(response.data);
    } catch (error) {
      console.log(`From contact frontend:`, error);
    }
  };

  // To delete contact
  const deleteContact = async(id)=>{
    try {
      const response = await axios.delete(`http://localhost:5005/api/admin/contacts/delete/${id}`,{
        headers:{
          Authorization:authorizationToken,
        }
      })
      if(response){
        getAllContact();
      }
    } catch (error) {
      console.log(`While Deleting Contacts:`,error);
    }
  }

  useEffect(() => {
    getAllContact();
  }, []);

  return (
    <section className="admin-user-section">
      <section className="admin-user-section">
        <div className="container heading">
          <h1>Contacts Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>subject</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contact.map((curElem, ind) => {
                const { name, email, subject, message } = curElem;
                return (
                  <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{subject}</td>
                    <td>{message}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => deleteContact(curElem.id)}
                      >
                        Delete
                      </button>
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

export default AdminContact;
