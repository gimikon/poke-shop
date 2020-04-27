import React, { Component } from "react";
import { PokemonConsumer } from "../context";
import Title from "./Title";
import EmptyCart from "./EmptyCart";
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {


  render() {
    return (
      <section>
        <PokemonConsumer>
          {(value) => {
            const { pokemonInCart } = value;
            if (pokemonInCart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your" title="Cart" />
                  <CartList value={value}/>
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />
            }
          }}

          
        </PokemonConsumer>
      </section>
    );
  }
}
