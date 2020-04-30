import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { PokemonConsumer } from "../context";
import "./css/pokemon.css";
const Sprite = styled.img`
  width: 10em;
  height: 10em;
`;



export default class Pokemon extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      imageUrl: "",
      pokemonIndex: null,
      notAvailable: false,
      imageLoading: true,
      inCart: false,
      price: 0,
      modalOpen: false,
      id: "",
      total: 0,
      count: 1,
    };
  }

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`;

    this.setState({
      name: name,
      imageUrl: imageUrl,
      pokemonIndex: pokemonIndex,
      price: parseInt(pokemonIndex) * 2,
      id: parseInt(pokemonIndex),
      total:parseInt(pokemonIndex) * 2,
    });
  }

  handleSubmit = () => {
    this.setState((value) => {
      return { ...value, inCart: true };
    });
    const pokemonData = this.state;
    this.openModal();
  };

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-4">
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
              {this.state.name}{" "}
              <Link to={`details/${this.state.pokemonIndex}`}>
                <span style={{ color: "gray" }}>
                  <i className="fas fa-info-circle"></i>
                </span>
              </Link>
            </h6>
          </div>
          <PokemonConsumer>
            {(value) => (
              <div
                className="pb-3 d-flex justify-content-center"
                style={{ backgroundColor: "white" }}
              >
              
                {this.props.inCart ? (<button
                  className="btn btn-secondary incart"
              
                >
                  In cart
                </button>):(  <button
                  onClick={() => {
                    this.handleSubmit();
                    value.addToCart({
                      ...this.state,
                      inCart: !this.state.inCart,
                    });
                  }}
                  className="cart-btn"
                  
                > Add
                  <i className="fas fa-cart-plus" />
                </button>) 
                }
          
               
                {this.state.modalOpen ? (
                  <Modal
                    img={this.state.imageUrl}
                    price={this.state.price}
                    name={this.state.name}
                    closeModal={this.closeModal}
                  />
                ) : null}
              </div>
            )}
          </PokemonConsumer>
        </div>
      </div>
    );
  }
}