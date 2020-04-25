import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import spinner from "./Spinner.gif";

const Sprite = styled.img`
  width: 10em;
  height: 10em;
`;

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25) 010px rgba(0, 0, 0, 0.22);
  }
`;

export default class Pokemon extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    notAvailable: false,
    imageLoading: true,
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`;

    this.setState({
      name: name,
      imageUrl: imageUrl,
      pokemonIndex: pokemonIndex,
    });
  }

  render() {
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        
          <div className="card">
          <Link to={`details/${this.state.pokemonIndex}`}>
            <h5 className="card-header">{this.state.pokemonIndex}</h5>
          </Link>

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
            <div className="card-footer d-flex justify-content-between">
              <button>
                <i className="fas fa-cart-plus" />
              </button>
            </div>
          </div>
        
      </div>
    );
  }
}
