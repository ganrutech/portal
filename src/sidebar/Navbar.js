import React from "react";
import * as FIcons from "react-icons/fa";
import { UncontrolledCollapse, Button } from "reactstrap";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Button
          id="sidebarCollapse"
          className="btn btn-info"
          onClick={props.toggle}
        >
          <FIcons.FaAlignLeft />
        </Button>
        <Button
          id="navbarSupportedContent"
          className="btn btn-dark d-inline-block d-lg-none ml-auto"
        >
          <FIcons.FaBars />
        </Button>
        <UncontrolledCollapse
          toggler="#navbarSupportedContent"
          className="navbar-collapse"
        >
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="!#">
                Page 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">
                Page 2
              </a>
            </li>
          </ul>
        </UncontrolledCollapse>
      </div>
    </nav>
  );
}

export default Navbar;
