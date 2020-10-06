import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import * as FIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";

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
        <ul className="nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="#">
              <MdIcons.MdNotificationsActive size="20" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <BiIcons.BiLogOut size="20" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
