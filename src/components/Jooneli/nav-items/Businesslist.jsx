import React from "react";
import { Link } from "react-router-dom";

const Businesslist = () => {
  return (
    <>
      <ul id="drop-down--business">
        <li>
          <Link to="#">Fintech</Link>
        </li>
        <li>
          <Link to="#">eUtility</Link>
        </li>
        <li>
          <Link to="#">Big data</Link>
        </li>
        <li>
          <Link to="#">Digital Wallet</Link>
        </li>
        <li>
          <Link to="#">eSurance</Link>
        </li>
        <li>
          <Link to="#">Education</Link>
        </li>
        <li>
          <Link to="#">Payment</Link>
        </li>
        <li>
          <Link to="#">OffSharing</Link>
        </li>
        <li>
          <Link to="#">Digital Lending</Link>
        </li>
        <li>
          <Link to="#">Health Tech</Link>
        </li>
        <li>
          <Link to="#">Neo Banking</Link>
        </li>
        <li>
          <Link to="#">Remittance</Link>
        </li>
      </ul>
    </>
  );
};

export default Businesslist;
