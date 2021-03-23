import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Logo } from "./Styles";
import Dropdown from "../Components/DropDown";
import BME from "../media/BME.jpg";
function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/HomePage">
          <Logo className="navbar-brand" to="/">
            <img src={BME} alt="logo" />
          </Logo>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/BookNow" className="nav-links" onClick={closeMobileMenu}>
              Book Now {dropdown && <Dropdown />}
              <i className="fas fa-caret-down" />
            </Link>
          </li>
          <li className="nav-item"></li>
          <li className="nav-item"></li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
