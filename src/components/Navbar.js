import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../pokeball.png";
import { ButtonContainer } from "./Button";
import { Nav } from 'react-bootstrap';
import { Button } from './Button';
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrap>
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img
            src={logo}
            alt="store"
            className="navbar-brand"
            style={{  }}
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/pokemons" className="nav-link">
              <h3 >Poké Shop!</h3>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <Link to="/cart">
            <Button>
              {" "}
              <i
                className="fa fa-shopping-cart fa-2x"
              />{" "}
            </Button>
          </Link>
        </Link>
      </nav>
      </NavWrap>
    );
  }
}


const NavWrap = styled.nav`
.nav-link > h3 {
line-spacing:3rem;
color:#FBD003;
font-weight:bold;
}
.navbar {
  background-color:#184E86;
  margin-bottom:3rem;
img {
width:2em;
height:3rem;}
  
}

`;