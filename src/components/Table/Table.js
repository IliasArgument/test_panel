import React from "react";
import Cards from "../Cards/Cards";
import "./Table.css";

const Table = ({ newArr }) => {
  return (
    <div className="Table">
      {newArr.map((items, i) => (
        <Cards items={items} key={items.name} count={i} />
      ))}
    </div>
  );
};

export default Table;
