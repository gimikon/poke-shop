import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./imges/pokeball.png";

import { Nav } from "react-bootstrap";

import MultiPlayer from "./MultiPlayer";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-dark px-sm-5 d-flex justify-content-vaseline"
        style={{ backgroundColor: "#242F3F", marginBottom: "7px" }}
      >
        <Link to="/">
          <i
            className="fa fa-home fa-2x"
            aria-hidden="true"
            style={{ color: "white" }}
          ></i>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-3">
            <Link to="/pokemons" className="nav-link">
              <h3
                pt-3="true"
                style={{
                  marginTop: "10px",
                  color: "#FBD003",
                  fontWeight: "bold",
                }}
              >
                Poké Shop!
              </h3>
            </Link>
          </li>
          <li>
            <MultiPlayer
              urls={[
                
                "https://fi.zophar.net/soundfiles/gameboy-gbs/pokemon-red/06%20Pokemon%20Gym.mp3",
                "https://fi.zophar.net/soundfiles/gameboy-gbs/pokemon-red/05%20Pokemon%20Center.mp3",
                "https://fi.zophar.net/soundfiles/gameboy-gbs/pokemon-red/33%20Cycling.mp3",
                "https://fi.zophar.net/soundfiles/gameboy-gbs/pokemon-red/23%20Battle%20%28VS%20Trainer%29.mp3"
              ]}
            />
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
