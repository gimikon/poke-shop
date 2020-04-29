import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Home from "./components/Home";
import Success from "./components/Success";
import test from "./pages/test";
import CheckoutForm from "./components/CheckoutForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component ={Home} />
          <Route exact path="/pokemons" component={PokemonList} />
          <Route path="/details/:pokemonIndex" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/checkout" component={CheckoutForm} />
          <Route exact path="/success" component={Success} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
