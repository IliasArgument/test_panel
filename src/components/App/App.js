import React from "react";
import useAppState from "./hook";
import SearchPanel from "../SearchPanel/SearchPanel";
import Error from "../Error/Error";
import Loaded from "../Loader/Loader";
import "./App.css";

const App = () => {
  const { error, isLoaded, data } = useAppState();
  
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
