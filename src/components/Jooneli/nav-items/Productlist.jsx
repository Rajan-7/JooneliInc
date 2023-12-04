import React from "react";
import { Link } from "react-router-dom";
const Productlist = () => {
  return (
    <>
      <ul id="drop-down--about">
        <li>
          <Link to="#">360 Core Banking system</Link>
        </li>
        <li>
          <Link to="#">Jooneli Trading</Link>
        </li>
      </ul>
    </>
  );
};

export default Productlist;
