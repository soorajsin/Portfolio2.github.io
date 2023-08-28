import React from "react";
import { AppBar, Toolbar, Tabs } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <Tabs className="tab">
              <NavLink to={"/"} className={"conetnt"}>Home</NavLink>
            </Tabs>
            <Tabs className="tab">
              <NavLink to={"/about"} className={"conetnt"}>About</NavLink>
            </Tabs>
            <Tabs className="tab">
              <NavLink to={"/service"} className={"conetnt"}>Service</NavLink>
            </Tabs>
            <Tabs className="tab">
              <NavLink to={"/portfolio"} className={"conetnt"}>Portfolio</NavLink>
            </Tabs>
            <Tabs className="tab">
              <NavLink to={"/contact"} className={"conetnt"}>Contact</NavLink>
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Header;
