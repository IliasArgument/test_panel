import React from "react";
import "./Checkbox.css";

const Checkbox = ({ onChange, checked, name, images, blur }) => {
  return (
    <div>
      <label className="check">
        <p className={name}>
          <img src={images} alt={images}></img>
        </p>
        <input
          onChange={onChange}
          className="checkbox"
          type="checkbox"
          name={name}
          checked={checked}
          onBlur={blur}
        ></input>
      </label>
    </div>
  );
};

export default Checkbox;
