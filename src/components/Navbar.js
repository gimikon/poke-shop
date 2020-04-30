import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../pokeball.png";
import { ButtonContainer } from "./Button";
import { Nav } from 'react-bootstrap';
import { home } from '../home.png'


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 d-flex justify-content-vaseline" style={{backgroundColor:'#242F3F', marginBottom:'7px'}}>
        <Link to="/">
        <i class="fa fa-home fa-2x" aria-hidden="true" style={{ color: "white" }}></i>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-3">
            <Link to="/pokemons" className="nav-link">
              <h3 pt-3 style={{ marginTop: "9px", color:'#FBD003', fontWeight:'bold' }}>Poké Shop!</h3>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <Link to="/cart">
            <span>
              {" "}
              <i
                style={{ color: "white" }}
                className="fa fa-shopping-cart fa-2x"
              />{" "}
            </span>
          </Link>
        </Link>
      </nav>
    );
  }
}
