import React from "react";

const Header = function() {
  return (
    <nav
      className="navbar nav-bar-background"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item container-todo">
          <img
            className="logo"
            src="/to-do.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
          TO DO List
        </a>
      </div>
    </nav>
  );
};

export default Header;
