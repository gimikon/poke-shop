import React, { Component } from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";
import logo from "./imges/pokeball.png";
import { PokemonConsumer } from "../context";
import Footer from './Footer'

export default class Home extends Component {
  render() {
    return (
      <PokemonConsumer>
        {(value) => (
          <React.Fragment>
            <div className="d-flex justify-content-center">
              <div className="holder">
                <div className="w-35 p-3">
                  <div className="shadow-lg p-5 mb-5 bg-white rounded">
                    <h5>
                      Let's start Poké shopping{" "}
                      <img
                        src={logo}
                        style={{
                          width: "2rem",
                          height: "2rem",
                          display: "inline",
                        }}
                      />
                    </h5>

                    <form>
                      <label>Name: </label>
                      <input
                        type="name"
                        name="name"
                        placeholder="Name"
                        required
                        className="form-control"
                        onChange={(event) =>
                          value.updateValue(event.target.value)
                        }
                      />

                      <label>Password: </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        required
                        className="form-control"
                      />
                      <div className="col text-center">
                        <Link to="/pokemons">
                          <button
                            type="sumbit"
                            className="btn btn-success mt-3 mb-3"
                            style={{ textDecoration: "none", margin: "0 auto" }}
                          >
                            Pokemon Go
                          </button>
                        </Link>
                      </div>
                      <p style={{ textAlign: "center" }}>
                        Fancy Pokétrack? Click!
                        <span style={{ marginLeft: "4px" }}>
                          <i className="fa fa-headphones"></i>
                        </span>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </React.Fragment>
        )}
      </PokemonConsumer>
    );
  }
}
