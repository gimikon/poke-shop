import React, { Component } from "react";
import axios from "axios";

const PokemonContext = React.createContext();
//provider
//cosumer

class PokemonProvider extends Component {
  state = {
    pokemonInCart: [],
    pokemonData: [],
    id:null,
    inCartValue:false,
    cartSubTotal: 0,
    cartSubTax: 0,
    cartTotal: 0,
    
  };

  async componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=300";
    const res = await axios.get(url);
    const pokemonIndex = url.split("/")[url.split("/").length - 2]; 
    const id = parseInt(pokemonIndex)
    this.setState({ pokemonData: res.data["results"] });
    // console.log(this.state.pokemon);
    this.setState({id:id})
  }

  getItem = (id) => {
    const pokemon = this.state.pokemonData.find((item) => item.id === id);
    return pokemon;
  };


  addToCart = (pokemon) => {
    this.setState({ pokemonInCart: [...this.state.pokemonInCart, pokemon] });
    console.log(pokemon);
    this.setState(
      () =>  {
      this.addTotals();
    }
  );
};

  increment = (id) => {
    console.log("this is just increment");
  };
  decrement = (id) => {
    console.log("this is just decrement");
  };

  removeItem = (id) => {
    this.setState({})
  };

  clearCart = () => {
    this.setState(()=> {
      return {pokemonInCart:[]}
    })
  };

  addTotals = () => {
    let subTotal = 0
    this.state.pokemonInCart.map((item) => (subTotal += item.price));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartSubTax: tax,
        cartTotal: total,
      };
    });
    console.log(subTotal, tax, total);
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
        }}
      >
        {this.props.children}
      </PokemonContext.Provider>
    );
  }
}

const PokemonConsumer = PokemonContext.Consumer;

export { PokemonProvider, PokemonConsumer };
