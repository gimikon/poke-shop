import React, { Component } from "react";
import axios from "axios";

const PokemonContext = React.createContext();
//provider
//cosumer

class PokemonProvider extends Component {
  state = {
    pokemonInCart: [],
    pokemonData: [],
    cartSubTotal: 0,
    cartSubTax: 0,
    cartTotal: 0,
  };

  async componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=300";
    const res = await axios.get(url);
    this.setState({ pokemonData: res.data["results"] });
    // console.log(this.state.pokemon);
  }

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
    this.setState({ pokemonInCart: [...this.state.pokemonInCart, pokemon] });
    console.log(this.state.pokemonInCart);
    console.log(pokemon);
  };

  increment = (id) => {
    console.log("this is just increment");
  };
  decrement = (id) => {
    console.log("this is just decrement");
  };

  removeItem = (id) => {
    console.log("this is remove");
  };

  clearCart = () => {
    console.log("the cart is cleared")
  }

  render() {
    return (
      <PokemonContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          increment:this.increment,
          decrement:this.decrement,
          removeItem:this.removeItem,
          clearCart:this.clearCart
        }}
      >
        {this.props.children}
      </PokemonContext.Provider>
    );
  }
}

const PokemonConsumer = PokemonContext.Consumer;

export { PokemonProvider, PokemonConsumer };
