import React from "react";
import "./Error.css";
import error from "../../img/error.jpg";

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
