import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./sidebar/Sidebar";
import Navbar from "./sidebar/Navbar";

import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";

import "./App.css";
import "./sidebar/Sidebar.css";

function App() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <Router>
      <div className="wrapper">
        <Sidebar collapse={collapse} />
        <div id="content">
          <Navbar toggle={toggle} />
          <div id="page-content">
            <Switch>
              <Route exact path="/">
                <Analytics />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/customers">
                <Customers />
              </Route>
              <Route render={() => <h2>404</h2>} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
