import React, { Component } from "react";
import axios

const PokemonContext = React.createContext();
//provider
//cosumer

class PokemonProvider extends Component {
  state = {
    pokemons: [],
    detailPokemon: detailProduct,
  };


  async componentDidMount() {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=300");
    this.setState({pokemons:res.data["results"]});
    console.log(pokemons)
  }


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
