import React, { useState, useEffect } from "react";
/*import { Button } from './Button';*/
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i className="fas fa-pizza-slice" />
            Rare Pizzas - Pizza Experimenter and Ingredients Submissions
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                {click ? <i className="fas fa-home" /> : null}
                Make Random Pizzas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/submitter"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Submit Your Ingredient
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/validator"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Validate Your Ingredient
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
