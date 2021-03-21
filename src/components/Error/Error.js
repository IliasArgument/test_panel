import React from "react";
import error from "../../assets/img/error.jpg";
import "./Error.css";

const Error = () => {
  return (
    <>
      <div className="error_block">
        <h1>Произошла ошибочка!</h1>
        <img className="img_error" src={error} alt="error"></img>
      </div>
    </>
  );
};

export default Error;
