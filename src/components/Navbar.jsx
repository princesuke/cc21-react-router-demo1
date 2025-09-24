import React from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home |</NavLink>&nbsp;
        <NavLink to="/about">About |</NavLink>&nbsp;
        <NavLink to="/contact">Contact |</NavLink>
        &nbsp;
        <Link to="https://www.google.com" target="_blank">
          google
        </Link>
      </nav>
      <br />
    </div>
  );
}
