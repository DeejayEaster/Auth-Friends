import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import Friends from "./components/Friends/Friends";

function App() {
  return (
    <div className="App">
      <h1>Here we go</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/protected" component={Friends} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
