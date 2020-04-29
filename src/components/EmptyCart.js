import React from "react";
import { Link } from "react-router-dom";
import Empty from "./css/Empty.css"

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center mb-8">
          <h2>The cart is empty</h2>
          <i class="fas fa-shopping-cart fa-5x"></i>
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
