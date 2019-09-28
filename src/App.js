import React from "react";
import TopAppBar from "./components/layouts/appbar";
import Map from "./components/map/map";

const App = () => {
  return (
    <React.Fragment>
      <TopAppBar text="Unionbank" exact path="/" />
      <Map />
    </React.Fragment>
  );
};
export default App;
