import React from "react";
import "./Cards.css";


const Cards = ({ items }) => {

  return (
    <>
    <div className="Card">
    <ul className="lists" key={items.lastName}>
        <li>
          <label>Name: </label> {items.name}
        </li>
        <li>
          <label>LastName: </label> {items.lastname}
        </li>
        <li>
          <label>Age: </label> {items.age}
        </li>
        <li>
          <label>Sex: </label> {items.sex}
        </li>
      </ul>
    </div>
      
    </>
  );
};

export default Cards;
