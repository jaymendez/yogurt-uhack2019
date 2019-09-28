import React from 'react';
import { Route, Switch } from "react-router-dom";
// import TopAppBar from './components/layouts/appbar';
import TopAppBar from './utils/materialize/TopAppBar';
import LandingPage from './components/LandingPage';
import PropertyPage from './components/PropertyPage';
import Map from "./components/map/map";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
          <div className="App">
            <TopAppBar text="Unionbank" exact path="/" />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/property" component={PropertyPage} />
            
          </div>
        </Switch>
    </React.Fragment>
  );
};
export default App;
