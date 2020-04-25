import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const PokemonContext = React.createContext();
//provider
//cosumer

class PokemonProvider extends Component {
  state = {
    pokemons: [],
    detailPokemon: detailProduct,
  };

  componentDidMount(){
    this.setPokemons();
  }

  setPokemons = () => {
    let temPokemons = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      temPokemons = [...temPokemons, singleItem];
    });
    this.setState(() => {
      return { pokemons: temPokemons };
    });
  };

  handleDetail = () => {
    console.log("hello from detail");
  };
  addToCart = () => {
    console.log("hello from add to cart");
  };

  render() {
    return (
      <PokemonContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </PokemonContext.Provider>
    );
  }
}

const PokemonConsumer = PokemonContext.Consumer;

export { PokemonProvider, PokemonConsumer };
