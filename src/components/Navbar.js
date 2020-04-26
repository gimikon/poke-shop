import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../pokeball.png";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-success navbar-dark px-sm-5">
        <Link to="/">
          <img
            src={logo}
            alt="store"
            className="navbar-brand"
            style={{ width: "2em", height: "3rem" }}
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <h4 style={{ lineSpaceing: "2rem" }}>Poke Shopping</h4>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <Link to="/cart">
            <span>
              {" "}
              <i
                style={{ color: "purple" }}
                className="fa fa-shopping-cart"
              />{" "}
            </span>
          </Link>
        </Link>
      </nav>
    );
  }
}
