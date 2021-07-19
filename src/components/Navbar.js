/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
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
            SPACEX
            <i class="fab fa-typo3" />
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
            <li className="nav-item">
              <Link
                to={isAuthenticated && "/dashboard"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <Link
                  to=""
                  className="nav-links"
                  onClick={logout || closeMobileMenu}
                >
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to=""
                  className="nav-links"
                  onClick={loginWithRedirect || closeMobileMenu}
                >
                  Login
                </Link>
              </li>
            )}
            {!isAuthenticated && (
              <li>
                <Link
                  to=""
                  className="nav-links-mobile"
                  onClick={loginWithRedirect || closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            )}
          </ul>
          {!isAuthenticated && button && (
            <Button onClick={loginWithRedirect} buttonStyle="btn--outline">
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
