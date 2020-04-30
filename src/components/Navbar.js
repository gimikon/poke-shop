import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./imges/pokeball.png";
import { ButtonContainer } from "./Button";
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
                
                "https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/sbgsbuqa/106-the%20road%20to%20viridian%20city%20-%20from%20palette.mp3",
                "https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/xwvbnmtw/110-pokemon%20center.mp3",
                "https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/jucncspp/115-battle%20%28vs%20trainer%29.mp3",
                
              
                "https://vgmdownloads.com/soundtracks/pokemon-gameboy-sound-collection/apzszjqg/130-cycling.mp3",
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
