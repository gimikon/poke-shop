import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from './Modal'

const Sprite = styled.img`
  width: 10em;
  height: 10em;
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
          <h6 className="card-header">Price:$ {this.state.price}</h6>
          <Sprite
            className="card-img-top rounded mx-auto mt-2"
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
            <h6 className="card-title">{this.state.name}</h6>
          </div>
          <div className="card-footer d-flex justify-content-around">
            <Link to={`details/${this.state.pokemonIndex}`}>
              <span style={{ color: "#28A745" }}>Details</span>
            </Link>
            {this.state.inCart ? (
              <button onClick={() => this.setState({ inCart: false })}>
                In cart
              </button>
            ) : (
              <button onClick={this.handleSubmit}>
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
