import React from "react";

const NavBar = ({ count }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        NavBar <span className="badge badge-pill badge-secondary">{count}</span>
      </span>
    </nav>
  );
};

export default NavBar;
