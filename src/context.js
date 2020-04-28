import React, { Component } from "react";
import axios from "axios";

const PokemonContext = React.createContext();
//provider
//cosumer

class PokemonProvider extends Component {
  state = {
    pokemonInCart: [],
    pokemonData: [],
    id: null,
    inCartValue: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  async componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=300";
    const res = await axios.get(url);
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const id = parseInt(pokemonIndex);
    this.setState({ pokemonData: res.data["results"] });

    // console.log(this.state.pokemon);
    this.setState({ id: id });
  }

  getItem = (id) => {
    const pokemon = this.state.pokemonInCart.find((item) => item.id === id);
    return pokemon;
  };

  addToCart = (pokemon) => {
    this.setState({ pokemonInCart: [...this.state.pokemonInCart, pokemon] });
    console.log("from add to cart", pokemon);
    this.setState(
      () => {
        this.addTotals();
      }
    )
  };

  increment = (id) => {
    let tempPokemons = [...this.state.pokemonInCart]
    const selectedPokemon = tempPokemons.filter(pokemon => pokemon.id === id)
    selectedPokemon[0].count = selectedPokemon[0].count + 1;
    selectedPokemon[0].total = selectedPokemon[0].count * selectedPokemon[0].price
    console.log(selectedPokemon[0].total)
    this.setState(()=> {return {pokemonInCart:[...tempPokemons]}}, ()=> {this.addTotals()})
  };

  decrement = () => {
  };

  clearCart = () => {
    this.setState(() => {
      return { pokemonInCart: [] };
    });
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.pokemonInCart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  render() {
    return (
      <PokemonContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          addTotals: this.addTotals,
        }}
      >
        {this.props.children}
      </PokemonContext.Provider>
    );
  }
}

const PokemonConsumer = PokemonContext.Consumer;

export { PokemonProvider, PokemonConsumer };
