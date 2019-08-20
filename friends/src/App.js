import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <h1>Here we go</h1>
      <Router>
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
