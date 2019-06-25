import React from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">{props.count}</span>
      </span>
    </nav>
  );
};

export default NavBar;
