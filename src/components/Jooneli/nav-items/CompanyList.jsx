import React from "react";
import { Link } from "react-router-dom";

const Companylist = () => {
  return (
    <>
      <ul id="drop-down--about">
        <li>
          <Link to="#">About Us</Link>
        </li>
        <li>
          <Link to="#">Board Of Directors</Link>
        </li>
        <li>
          <Link to="#">Management Team</Link>
        </li>
        <li>
          <Link to="#">Careers</Link>
        </li>
      </ul>
    </>
  );
};

export default Companylist;
