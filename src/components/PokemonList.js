import React, { Component } from "react";
import Pokemon from "./Pokemon";
import Cart from "./Cart";
import Title from "./Title";

import { PokemonConsumer } from "../context";

export default class PokemonList extends Component {
  inCart(pokemon, cart) {
    let inCart = false;
    cart.forEach((p) => {
      if (p.name === pokemon.name) {
        inCart = true;
      }
    });
    return inCart;
  }

  render() {
    return (
      <React.Fragment>
        <Title name="Pokemon Collection"/>
        <PokemonConsumer>
          {(value) => (
            <div className="py-6">
              <div className="container mt-10">
                <div className="row">
                  {value.pokemonData.map((item) => {
                    return (
                      <Pokemon
                        key={item.name}
                        name={item.name}
                        url={item.url}
                        inCart={this.inCart(item, value.pokemonInCart)}
                      />
                    );
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
