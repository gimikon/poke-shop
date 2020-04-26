import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const PokemonContext = React.createContext();
//provider
//cosumer

class PokemonProvider extends Component {
  state = {
    pokemons: [],
    pokemonIndex: "",
  };

  async componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=300";
    const res = await axios.get(url);
    this.setState({ pokemons: res.data["results"] });
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    this.setState({ pokemonIndex });
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
  addToCart = (id) => {
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
