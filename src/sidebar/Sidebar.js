import React, { useState, useEffect } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import logo from "../images/logo.png";
import { Collapse } from "reactstrap";

import { MenuList } from "./MenuJSON";

function Sidebar(props) {
  const [menu, setMenu] = useState(MenuList);

  useEffect(() => {
    const pathname = props.location.pathname;
    const activeElement = document.querySelector(
      `a.active[href='#${pathname}']`
    );
    if (activeElement.closest("div").classList.contains("collapse")) {
      document.querySelector(`a.dropdown-toggle[href='#${pathname}']`).click();
    }
    // eslint-disable-next-line
  }, []);

  const handleClick = (id) => {
    const mName = menu[id].nameHeader;
    const mValue = menu.map((each) =>
      each.nameHeader === mName
        ? { ...each, open: !each.open }
        : { ...each, open: false }
    );
    setMenu(mValue);
  };

  return (
    <nav id="sidebar" className={props.collapse ? "active" : ""}>
      <div className="sidebar-header">
        <img id="logo" src={logo} alt="logo" />
      </div>

      <ul className="list-unstyled components">
        <p>Admin</p>
        {menu.map((each, index) => (
          <li key={each.nameHeader}>
            {each.subMenu && (
              <>
                <Link
                  to="#"
                  data-toggle="collapse"
                  className="dropdown-toggle"
                  onClick={() => handleClick(index)}
                >
                  {each.icon}
                  {each.nameHeader}
                </Link>
                <Collapse isOpen={each.open}>
                  <ul className="list-unstyled">
                    {each.subMenu.map((subData) => (
                      <li key={subData.name}>
                        <NavLink exact to={subData.path}>
                          {subData.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </Collapse>
              </>
            )}
            {!each.subMenu && (
              <NavLink to={each.path} onClick={() => handleClick(index)}>
                {each.icon} {each.nameHeader}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default withRouter(Sidebar);
