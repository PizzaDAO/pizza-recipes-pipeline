import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Validator from "./components/pages/Validator";
import Submitter from "./components/pages/Submitter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/submitter" component={Submitter} />
          <Route path="/validator" component={Validator} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
