import React, { Component } from "react";
import Pokemon from "./Pokemon";
import { Link } from "react-router-dom";
import spinner from "../components/Spinner.gif";
import Search from './Search'

import axios from "axios";

export default class PokemonList extends Component {
  state = {
    pokemon: null,
    pokemonIndex:'',
  };

  async componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=300"
    const res = await axios.get(url);
    this.setState({ pokemon: res.data["results"] });
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    console.log(this.state.pokemon);
    this.setState({pokemonIndex})
  }

  addToCart= (pokemonIndex) => {

  }

  render() {
    return (
      <React.Fragment>
      <Search />
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
