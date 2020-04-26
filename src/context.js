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
  }lk;k;klgi

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

  getItem = (id) => {
    const pokemon = this.state.pokemons.find(item=> item.id === id )
    return pokemon;
  }

  handleDetail = (id) => {
    const pokemon = this.getItem();
    this.setState(()=> {
      return {detailPokemon:pokemon}
    })
  };
  addToCart = id => {
    console.log(`hello from add to cart.id is ${id}`);
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
