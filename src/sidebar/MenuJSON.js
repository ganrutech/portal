import React from "react";
import * as AIcons from "react-icons/ai";

export const MenuList = [
  {
    nameHeader: "Home",
    icon: <AIcons.AiFillHome />,
    open: false,
    subMenu: [
      { path: "/", name: "Analytics" },
      { path: "/dashboard", name: "Dashboard" },
    ],
  },
  {
    path: "/customers",
    nameHeader: "Customers",
    icon: <AIcons.AiOutlineUsergroupAdd />,
  },
  {
    nameHeader: "Settings",
    icon: <AIcons.AiFillSetting />,
    open: false,
    subMenu: [
      { path: "/general", name: "General" },
      { path: "/profile", name: "Profile" },
    ],
  },
];
