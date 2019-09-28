import React from "react";
import TopAppBar from "./components/layouts/appbar";

const App = () => {
  return (
    <React.Fragment>
      <TopAppBar text="Unionbank" exact path="/" />
    </React.Fragment>
  );
};
export default App;
