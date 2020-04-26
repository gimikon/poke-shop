import React, { Component } from "react";

export default class Cart extends Component {
  state = {
    pokemonInCart: [],
    totalPrice: "",
    inCart: true,
  };

  componentDidMount() {
    const { id, name } = this.props;
    const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    this.setState({
      name: name,
      id: id,
      imageUrl: imageUrl,
      inCart: true,
    });
  }

  render() {
    return (
      <div>
        <p>hello from the cart</p>
        <p>{this.state.name}</p> 
        {/*ask aleks*/}
      </div>
    );
  }
}
