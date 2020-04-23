import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-success navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              pokemon
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span> my cart 🛒</span>
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}
