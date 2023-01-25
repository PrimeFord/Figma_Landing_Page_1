import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <p>Logo</p>
      <div className="links">
        <a href="http://">Button 1</a>
        <a href="http://">Button 2</a>
        <a href="http://">Button 3</a>
        <a href="http://">Button 4</a>
      </div>
      <div className="btn">
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
    </nav>
  );
};

export default Navbar;
