import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from './Modal'


const Sprite = styled.img`
  width: 10em;
  height: 10em;
`;

const CartButton = styled.button`
.cart-btn {
position:absolute;
bottom:0;
right:0;
padding:0.2rem 0.4rem;
background:blue;
border:none;
color:white;
font-size:1.4em;
border-radius:0.5 0 0 0;
}
`;

export default class Pokemon extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: null,
    notAvailable: false,
    imageLoading: true,
    inCart: false,
    price:'',
    modalOpen:false,
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`;

    this.setState({
      name: name,
      imageUrl: imageUrl,
      pokemonIndex: pokemonIndex,
      price:parseInt(pokemonIndex) * 2,
    });
  }

  handleSubmit = (event) => {
    this.setState({ inCart: true });
    const pokemonData = this.state;
    this.props.onSaveCart(pokemonData);
    this.openModal()
  };

  openModal(){
    this.setState({modalOpen:true})
  }

  closeModal = () => {
    this.setState({modalOpen:false})
  }

  render() {
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
        
          <Sprite
            className="card-img-top rounded mx-auto mt-2 pt-3"
            src={this.state.imageUrl}
            onLoad={() => this.setState({ imageLoading: false })}
            onError={() => this.setState({ notAvailable: true })}
          />
          {this.state.notAvailable ? (
            <h6 className="mx-auto">
              <span className="badge badge-danger mt-2">Not Available</span>
            </h6>
          ) : null}

          <div className="card-body mx-auto">
            <h6 className="card-title text-capitalize">
            {this.state.name}  <Link to={`details/${this.state.pokemonIndex}`}>
            <span style={{color:'#FF3839'}}><i class="far fa-question-circle"></i></span>
          </Link>
            </h6>
           
          </div>
          <div className="pb-3 d-flex justify-content-center" style={{backgroundColor:'white'}}>
           
            {this.state.inCart ? (
              <p>In cart</p> 
            ) : (
              <button onClick={this.handleSubmit} className="cart-btn" style={{backgroundColor:'#383838', color:'white', borderRadius:'4px',outline:'none'}} >
                <i className="fas fa-cart-plus" />
              </button>
            )}
            {this.state.modalOpen? (
              <Modal img={this.state.imageUrl} price={this.state.price} name={this.state.name} closeModal={this.closeModal}/>
              ):
            null}
          </div>
        </div>
      </div>
    );
  }
}
