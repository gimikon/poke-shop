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
                
                "https://downloads.khinsider.com/game-soundtracks/album/pokemon-pocket-monsters-sound-anime-collection/01%2520Aim%2520to%2520Be%2520a%2520Pok%25C3%25A9mon%2520Master.mp3",
                "https://downloads.khinsider.com/game-soundtracks/album/pokemon-pocket-monsters-sound-anime-collection/02%2520Pok%25C3%25A9mon%252C%2520I%2520Choose%2520You%2521.mp3",
                "https://downloads.khinsider.com/game-soundtracks/album/pokemon-pocket-monsters-sound-anime-collection/03%2520Setting%2520Off.mp3",
                "https://downloads.khinsider.com/game-soundtracks/album/pokemon-pocket-monsters-sound-anime-collection/22%2520Pok%25C3%25A9mon%2520Battle%2521.mp3"
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
