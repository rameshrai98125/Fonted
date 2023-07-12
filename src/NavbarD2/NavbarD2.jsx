import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../src/asserts/LOGO/LOGO.png";
import { CgMenu } from "react-icons/cg";
import "./NavbarD2.scss";

const NavbarD2 = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to={"/"}>
          <div className="logo">
            <figure className="logo-menu">
              {" "}
              <img src={logo} alt="" />
            </figure>
          </div>
        </NavLink>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <CgMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul onClick={() => setShowNavbar(!setShowNavbar)}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/about">About</NavLink>
            </li> */}

            <li>
              <NavLink to="/project">Project</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/interior">Interior</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarD2;
