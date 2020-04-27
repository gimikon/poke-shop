import React from "react";

export default function CartItem({ item, value }) {
  const { id, name, imageUrl, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={imageUrl}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="pokemon"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 pt-4">
        <span className="d-lg-none">Pokemon :</span>
        {name}
      </div>
      <div className="col-10 mx-auto col-lg-2 pt-4">
        <span className="d-lg-none">Price$ :</span>
        ${price}
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
          <i className="fas fa-trash" style={{ color: "orange" }}></i>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2 pt-4">
        <strong>Pokemon Total : $ {price}</strong>
      </div>
    </div>
  );
}
