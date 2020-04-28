import React, { Component } from "react";
import Pokemon from "./Pokemon";
import { Link } from "react-router-dom";
import spinner from "../components/Spinner.gif";
import Search from "./Search";
import Cart from "./Cart";
import axios from "axios";
import { PokemonConsumer } from "../context";

export default class PokemonList extends Component {

 inCart(pokemon, cart) {
  let inCart = false;
  cart.forEach((p) => {
    if(p.name === pokemon.name){
      inCart = true;
    }
  })
  return inCart
 }

  render() {
    return (
      <React.Fragment>
        <PokemonConsumer>
          {(value) => (
            <div className="py-6">
              <div className="container mt-10">
                <div className="row">
                {value.pokemonData.map((item) => {
                  return <Pokemon 
                  key={item.name}
                  name={item.name}
                  url={item.url}
                  inCart={this.inCart(item, value.pokemonInCart)}/>
                })}
                </div>
              </div>
            </div>
          )}
        </PokemonConsumer>
      </React.Fragment>
    );
  }
}
