import React from "react";
import { Link } from "react-router-dom";
import logo from './imges/pika.gif'
import Footer from './Footer'

export default function EmptyCart() {
  return (
    <React.Fragment>
    <div className="container mt-5" style={{minHeight:'80vh'}}>
      <div className="row">
        <div className="col-10 mx-auto text-center mb-6">
          <h3>Cart Empty</h3>
          
          <br></br>
          <img src={logo} style={{height:"12rem", width:"24rem"}}/>
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
   
   </React.Fragment>
  );
}