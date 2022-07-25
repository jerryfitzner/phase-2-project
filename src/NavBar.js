import React from "react";
/* Add NavLink to import */
import { NavLink } from "react-router-dom";

/* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block",
  width: "150px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

/* define the NavBar component */
function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/needs"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Current Needs
      </NavLink>
      <NavLink
        to="/requestform"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Request Relief
      </NavLink>
    </div>
  );
}

export default NavBar;