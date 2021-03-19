import React from "react";
import "./SearchPanel.css";
import Table from "../Table/Table";
import UseAppState from "../App/hook";

const SearchPanel = ({ data }) => {
  const {
    searchName,
    searchLast,
    searchAge,
    checkMale,
    checkFemale,
    arr,
    onChange,
    onChangeLast,
    onChangeAge,
    onChangeTargetMale,
    onChangeTargetFemale,
    onSubmitChange,
    onBlurHide
  } = UseAppState({ data });

 
  return (
    <>
      <form className="forms" onSubmit={onSubmitChange}>
        <input
          onChange={onChange}
          className="text"
          type="text"
          value={searchName}
          name="name"
          placeholder="...Name"
        ></input>
        <input
          onChange={onChangeLast}
          className="text"
          type="text"
          value={searchLast}
          name="lastname"
          placeholder="...LastName"
        ></input>
        <input
          onChange={onChangeAge}
          className="text"
          type="text"
          value={searchAge}
          name="age"
          placeholder="...Age"
        ></input>
        <label className="check">
          <p className="M">M</p>
          <input
            onChange={onChangeTargetMale}
            className="checkbox"
            type="checkbox"
            name="M"
            checked={checkMale}
            onBlur={onBlurHide}
          ></input>
        </label>
        <label className="check">
          <p className="F">F</p>
          <input
            onChange={onChangeTargetFemale}
            checked={checkFemale}
            className="checkbox"
            type="checkbox"
            name="W"
            onBlur={onBlurHide}
          ></input>
        </label>
      </form>
      <Table arr={arr} />
    </>
  );
};

export default SearchPanel;
