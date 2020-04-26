import React, { Component } from 'react'


export default class Cart extends Component {
  state = {
    pokemonInCart:[],
    totalPrice:'',
    inCart:false,
   
  };

  componentDidMount() {
    const { id, name } = this.props;
    const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    this.setState({
      name: name,
      id:id,
      imageUrl: imageUrl,
      inCart: true,
       
    });
  }

  
  render() {
    return (
      <div>
      {this.state.inCart? (<p>{this.state.name}</p>):null}
        
      
      </div>
    )
  }
}
