import React from "react";
import Cards from "../Cards/Cards";
import "./Table.css";

const Table = ({ arr }) => {
  return (
    <div className="Table">
      {arr.map((items) => (
        <Cards items={items} key={items.name} />
      ))}
    </div>
  );
};

export default Table;
