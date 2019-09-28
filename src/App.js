import React from 'react';
import { Route, Switch } from "react-router-dom";
// import TopAppBar from './components/layouts/appbar';
import TopAppBar from './utils/materialize/TopAppBar';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <React.Fragment>
      <Switch>
          <div className="App">
            <TopAppBar text="Unionbank" exact path="/" />
            <Route exact path="/" component={LandingPage} />
          </div>
        </Switch>
    </React.Fragment>
  );
};
export default App;
