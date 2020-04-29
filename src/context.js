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
    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500";
    const res = await axios.get(url);
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const id = parseInt(pokemonIndex);
    this.setState({ pokemonData: res.data["results"] });

    
  }

  getItem = (id) => {
    const pokemon = this.state.pokemonInCart.find((item) => item.id === id);
    return pokemon;
  };

  addToCart = (pokemon) => {
    this.setState({ pokemonInCart: [...this.state.pokemonInCart, pokemon] });    
    this.setState(
      // () => {
      //   this.addTotals();
      // }
    )
  };

  increment = (id) => {
    let tempPokemons = [...this.state.pokemonInCart]
    const selectedPokemon = tempPokemons.filter(pokemon => pokemon.id === id)
    selectedPokemon[0].count = selectedPokemon[0].count + 1;
    selectedPokemon[0].total = selectedPokemon[0].count * selectedPokemon[0].price
    this.setState(()=> {return {pokemonInCart:[...tempPokemons]}}, ()=> {this.addTotals()})
  };

  decrement = (id) => {
    let tempPokemons = [...this.state.pokemonInCart]
    const selectedPokemon = tempPokemons.filter(pokemon => pokemon.id === id);
    selectedPokemon[0].count = selectedPokemon[0].count - 1;
    if(selectedPokemon[0].count === 0) {
      this.removeItem(id);
    } else {
    selectedPokemon[0].total = selectedPokemon[0].count * selectedPokemon[0].price
    this.setState(()=> {return {pokemonInCart:[...tempPokemons]}}, ()=> {this.addTotals()})

    }
    
  };


  removeItem = (id) => {
    let tempPokemons = [...this.state.pokemonInCart]
    let tempCart = [...this.state.pokemonInCart]
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempPokemons.indexOf(this.getItem(id))
    let removePokemon = tempPokemons[index]
    removePokemon.inCart = false;
    removePokemon.total = 0;
    removePokemon.count = 0;
    this.setState(()=> {
      return{pokemonInCart:[...tempCart],
      }
    }, () => {
      this.addTotals();
    })
  };

  clearCart = () => {
    this.setState(() => {
      return { pokemonInCart: [] };
    });
    this.setState(()=> {
      return { cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,}
    })
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
