import React, { Component } from 'react'


const PokemonContext = React.createContext();
//create a new context

class PokemonProvider extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: null,
    notAvailable: false,
    imageLoading: true,
    inCart: false,
    price:'',
    total:'',
    count:'',
    modalOpen:false,
  }

  render() {
    return (
      <PokemonContext.Provider value="hello">
      {this.props.children}
      </PokemonContext.Provider>
    )
  }
}

export default PokemonProvider
