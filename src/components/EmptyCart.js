import React from "react";
import { Link } from "react-router-dom";
import logo from './imges/pika.gif'

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center mb-6">
          <h2>The cart is currently empty</h2>
          
          <br></br>
          <img src={logo} style={{height:"12rem", width:"20rem"}}/>
          <br></br>
          <Link to="/pokemons" styled={{ textDecoration: "none" }}>
            <button
              className="btn btn-success"
              style={{ margin: "0 auto", marginTop: "2rem" }}
            >
              Go Back to Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}