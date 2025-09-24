import React from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const styles = {
    baseLink: "inline-block hover:bg-gray-100 rounded-md px-3 py-1.5",
    activeLink:
      "inline-block bg-blue-600 text-white rounded-md px-3 py-1.5 font-bold",
  };

  const getNavClass = ({ isActive }) =>
    isActive ? styles.activeLink : styles.baseLink;

  return (
    <div>
      <nav className="mt-3">
        <ul className="flex flex-wrap justify-center items-center gap-2 p-0 m-0 list-none">
          <li>
            <NavLink to="/" className={getNavClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getNavClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getNavClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" className={getNavClass}>
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
      <br />
    </div>
  );
}
