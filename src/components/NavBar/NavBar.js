import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./NavBar.scss";
import M from "materialize-css";
import { Link } from "react-router-dom";
const NavBar = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  }, []);
  return (
    <Fragment>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper black darken-3 ">
    
            <a href="!#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/" className="amber darken-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/showpage">Carreers</Link>
              </li>
              <li>
                <Link to="/about">Social Responsibility</Link>
              </li>

              <li>
                <Link to="/about">Investors</Link>
              </li>

              <li>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul id="slide-out" className="sidenav ambar">
        <li>
          <Link to="/" className="amber darken-2">
            Home
          </Link>
        </li>
        <li>
          <Link to="/showpage">Carreers</Link>
        </li>
        <li>
          <Link to="/about">Social Responsibility</Link>
        </li>

        <li>
          <Link to="/about">Investors</Link>
        </li>

        <li>
          <Link to="/about">About us</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavBar;
