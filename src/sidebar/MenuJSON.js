import React from "react";
import * as VsIcons from "react-icons/vsc";
import * as AIcons from "react-icons/ai";

export const MenuList = [
  {
    nameHeader: "Home",
    icon: <AIcons.AiFillHome />,
    open: false,
    subMenu: [
      { path: "/", name: "Home1" },
      { path: "/dashboard", name: "Dashboard" },
    ],
  },
  { path: "/about", nameHeader: "About", icon: <VsIcons.VscAccount /> },
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
