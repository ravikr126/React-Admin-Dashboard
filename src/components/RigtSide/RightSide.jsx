import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Customers </h3>
        <h5>Customers that buy products</h5>
        <Updates />
      </div>
    </div>
  );
};

export default RightSide;
