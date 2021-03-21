import React from "react";
import "./Input.css";

const Input = ({ onChange, value, placeholder, name, blur }) => {
  return (
    <input
      onChange={onChange}
      className="text"
      value={value}
      name={name}
      placeholder={placeholder}
      onBlur={blur}
    ></input>
  );
};

export default Input;
