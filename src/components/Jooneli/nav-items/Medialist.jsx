import React from "react";
import { Link } from "react-router-dom";

const Medialist = () => {
  return (
    <>
      <ul id="drop-down--about">
        <li>
          <Link to="#">Corporate News</Link>
        </li>
        <li>
          <Link to="#">Newsletters</Link>
        </li>
        <li>
          <Link to="#">Video</Link>
        </li>
        <li>
          <Link to="#">Tenders</Link>
        </li>
      </ul>
    </>
  );
};

export default Medialist;
