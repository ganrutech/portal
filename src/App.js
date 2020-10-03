import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./sidebar/Sidebar";
import Navbar from "./sidebar/Navbar";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import "./sidebar/Sidebar.css";

function App() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <Router basename="/portal">
      <div className="wrapper">
        <Sidebar collapse={collapse} />
        <div id="content">
          <Navbar toggle={toggle} />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route render={() => <h2>404</h2>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
