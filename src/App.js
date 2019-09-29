import React from "react";
import { Route, Switch } from "react-router-dom";
// import TopAppBar from './components/layouts/appbar';
import TopAppBar from "./utils/materialize/TopAppBar";
import LandingPage from "./components/LandingPage";
import PropertyPage from "./components/PropertyPage";
import Map from "./components/map/map";
import MobileMap from "./components/map/mobileMap";
import TestMaps from "./components/testMaps";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <div className="App">
          <TopAppBar
            text="Unionbank"
            exact
            path="/"
            style={{ marginBottom: "20px" }}
          />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/property" component={PropertyPage} />
          <Route exact path="/mobile" component={MobileMap} />
          <Route exact path="/testMaps" component={TestMaps} />
        </div>
      </Switch>
    </React.Fragment>
  );
};
export default App;
