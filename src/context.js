import React, { Component } from "react";


const PokemonContext = React.createContext();
//provider
//cosumer

class PokemonProvider extends Component {
  state = {
    pokemonInCart:[]
 
  };



  getItem = (id) => {
    const pokemon = this.state.pokemons.find((item) => item.id === id);
    return pokemon;
  };

  handleDetail = (id) => {
    const pokemon = this.getItem();
    this.setState(() => {
      return { detailPokemon: pokemon };
    });
  };
  addToCart = (pokemon) => {
    this.setState({pokemonInCart:[...this.state.pokemonInCart,pokemon]})
  };

  



  render() {
    return (
      <PokemonContext.Provider
        value={{
          ...this.state,
          addToCart:this.addToCart

        }}
      >
        {this.props.children}
      </PokemonContext.Provider>
    );
  }
}

const PokemonConsumer = PokemonContext.Consumer;

export { PokemonProvider, PokemonConsumer };
