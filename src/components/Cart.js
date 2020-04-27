import React, { Component } from "react";
import {PokemonConsumer} from '../context'

export default class Cart extends Component {
 


  render() {
    return (
      <PokemonConsumer>
      {(hello) => {

        return <h1>{hello.pokem}</h1>
      }}
      
      </PokemonConsumer>
    );
  }
}
