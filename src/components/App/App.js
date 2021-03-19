import React from "react";
import "./App.css";
import SearchPanel from "../SearchPanel/SearchPanel";
import Error from "../Error/Error";
import Loaded from "../Loaded/Loaded";
import UseAppState from "./hook";

const App = () => {
  const { error, isLoaded, data } = UseAppState();

  if (!error) {
    return <Error />;
  }
  if (isLoaded) {
    return <Loaded />;
  }
  return (
    <div className="App">
      <SearchPanel data={data} />
    </div>
  );
};

export default App;
