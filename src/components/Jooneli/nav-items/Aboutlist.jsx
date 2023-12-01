import React from "react";
import { Link } from "react-router-dom";

const Aboutlist = () => {
  return (
    <>
      <ul id="drop-down--about">
        <li>
          <Link to="#">The Company</Link>
        </li>
        <li>
          <Link to="#">Ecosystem</Link>
        </li>
        <li>
          <Link to="#">Impact</Link>
        </li>
        <li>
          <Link to="#">Milestone</Link>
        </li>
        <li>
          <Link to="#">Leadership</Link>
        </li>
      </ul>
    </>
  );
};

export default Aboutlist;
