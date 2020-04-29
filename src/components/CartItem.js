import React from "react";
import { PokemonConsumer } from "../context";

export default function CartItem({ item, value }) {
  const { id, name, imageUrl, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-2 text-capitalize text-center" style={{borderBottom:'1px solid #eee'}}>
      <div className="col-10 mx-auto col-lg-2">
      
        <img
          src={imageUrl}
          style={{ width: "6rem", height: "6rem" }}
          className="img-fluid"
          alt="pokemon"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 pt-4">
        <span className="d-lg-none">Pokemon :</span>
      <h4>{name}</h4>  
      </div>
      <div className="col-10 mx-auto col-lg-2 pt-4">
        <span className="d-lg-none">Price$ :</span>
        <h4>${price}</h4> 
      </div>
      <div className="col-10 mx-auto col-lg-2 my-lg-0 pt-4">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn  btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn  btn-black mx-1">{count}</span>
            <span className="btn  btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/*end*/}
      <div className="col-10 mx-auto col-lg-2 pt-4">
        <div  onClick={() => removeItem(id)}>
          <i className="fas fa-trash fa-2x" style={{ color: "orange", cursor:"pointer" }}></i>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2 pt-4">
        <strong>Pokemon Total : $ {total}</strong>
      </div>
    </div>
  );
}

CartItem.contextType = PokemonConsumer;