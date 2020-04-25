import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import spinner from "./Spinner.gif";

const Sprite = styled.img`
  width: 10em;
  height: 10em;
`;

export default class Pokemon extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    notAvailable: false,
    imageLoading: true,
    inCart: false,
    pokemonInCart:[]
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`;

    this.setState({
      name: name,
      imageUrl: imageUrl,
      pokemonIndex: pokemonIndex,
      inCart: false,
    });
  }

 


  render() {
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          
            <h6 className="card-header">No. {this.state.pokemonIndex}</h6>
          

          
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
            <span style={{color:'#28A745'}}>Details</span>
          </Link>
            {this.state.inCart ? (
              <button onClick={() => this.setState({ inCart: false })}>
                In Cart
              </button>
            ) : (
              <button>
                <i className="fas fa-cart-plus" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
