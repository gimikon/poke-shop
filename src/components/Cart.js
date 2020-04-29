import React, { Component } from "react";
import { PokemonConsumer } from "../context";
import Title from "./Title";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import styled from "styled-components";
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';



export default class Cart extends Component {
  // static context = PokemonConsumer

  componentDidMount() {
    let value = this.context;
    value.addTotals();
  }

  render() {
    return (
      <Section>
        <PokemonConsumer>
          {(value) => {
            const { pokemonInCart } = value;
            if (pokemonInCart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your" title="Cart" />
                  <CartList value={value} />
                  <CartTotals value={value} />
                  
                    <StripeProvider apiKey="pk_test_wwtIbkjfR6nqZsBaM9J3q0Is00bsjUuye9">
                      <Elements>
                        <CheckoutForm totalCost="10" />
                      </Elements>
                    </StripeProvider>
                
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </PokemonConsumer>
      </Section>
    );
  }
}

Cart.contextType = PokemonConsumer;

export const Section = styled.section`
  color: #3f4249;
 
`;
