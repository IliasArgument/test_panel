import React from "react";
import useAppState from "../App/hook";
import Table from "../Table/Table";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import Male from "../../assets/img/male.png";
import Female from "../../assets/img/female.png";
import "./SearchPanel.css";

const SearchPanel = ({ data }) => {
  const { ...state } = useAppState({ data });

  return (
    <>
      <form className="forms" onSubmit={state.onSubmitChange}>
        <div className="forms_panel">
          <div className="panel_block1">
          <Input
            onChange={state.onChange}
            value={state.searchName}
            placeholder="...Name"
            name="name"
            blur={state.onBlurHide}
          />
          <Input
            onChange={state.onChange}
            value={state.searchLast}
            placeholder="...Last name"
            name="lastName"
            blur={state.onBlurHide}
          />
          <Input
            onChange={state.onChange}
            value={state.searchAge}
            placeholder="...Age"
            name="age"
            blur={state.onBlurHide}
          />
          </div>
          <div className="panel_block2">
          <Checkbox
            onChange={state.onChangeCheck}
            checked={state.checkMale}
            name="M"
            images={Male}
            blur={state.onBlurHide}          
            />
          <Checkbox
            onChange={state.onChangeCheck}
            checked={state.checkFemale}
            name="F"
            images={Female}
            blur={state.onBlurHide}
          />        
          </div>
        </div>
      </form>
      <Table newArr={state.newArr} />
    </>
  );
};

export default SearchPanel;
