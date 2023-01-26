import React from "react";

const Meet = ({ img, header, caption }) => {
  return (
    <div className="pple1">
      <img src={img} alt="" />
      <h4>{header}</h4>
      <p>{caption}</p>
    </div>
  );
};

export default Meet;
