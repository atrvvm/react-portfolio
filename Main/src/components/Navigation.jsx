/** @format */

import React from "react";
import { NavLink } from "react-router";

export default function NavRoute() {
  return (
    <div className="nav-section">
      <div className="nav-layout">
        <div className="nav-item">
          <NavLink to="/About">ABOUT</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/Projects">PORTFOLIO</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/Contact">CONTACT</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/Resume">RESUME</NavLink>
        </div>
      </div>
    </div>
  );
}
