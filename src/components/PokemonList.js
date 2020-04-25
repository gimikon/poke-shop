import React, { Component } from "react";
import Pokemon from "./Pokemon";
import { Link } from "react-router-dom";

import axios from "axios";

export default class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000",
    pokemon: null,
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
    console.log(this.state.pokemon);
  }

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            {this.state.pokemon ? (
              <div className="row">
                {this.state.pokemon.map((pokemon) => (
                  <Pokemon
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                  />
                ))}
              </div>
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
