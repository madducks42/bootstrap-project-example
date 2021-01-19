import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./Home"
import Module from "./Module"

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/module" component={Module} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;