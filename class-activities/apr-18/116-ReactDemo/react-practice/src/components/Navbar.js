import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

var styles = {
	color:'white',
	backgroundColor:'green',
	justifyContent:'flex-end'
};

const Navbar = () => (
  <nav className="navbar" style={styles}>
    <a href="/">Welcome</a>
  </nav>
);

export default Navbar;
