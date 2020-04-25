import React, { Component } from "react";
import Pokemon from "./Pokemon";
import { Link } from "react-router-dom";
import spinner from "../components/Spinner.gif";
import Search from "./Search";
import Cart from "./Cart";
import axios from "axios";

export default class PokemonList extends Component {
  state = {
    pokemon: null,
    inCart: [],
  };

  async componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=300";
    const res = await axios.get(url);
    this.setState({ pokemon: res.data["results"] });
    // console.log(this.state.pokemon);
  }

  onSaveCart = (name) => {
    const allPokemons = this.state.inCart
    allPokemons.push(name)
    this.setState({inCart:allPokemons})
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.inCart.map((pokemon) =>(
            <Cart key={pokemon} name={pokemon} />
          ) )}
        
        </div>
       
        <div className="py-5">
          <div className="container">
            {this.state.pokemon ? (
              <div className="row">
                {this.state.pokemon.map((pokemon) => (
                  <Pokemon
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                    onSaveCart={this.onSaveCart}
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
