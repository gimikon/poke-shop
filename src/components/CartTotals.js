import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <h5>
              <span className="text-title">Subtotal:</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">Taxtotal:</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">Total:</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <Link to="/cart">
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </Link>
            <Link to="/test">
            <button className="btn btn-outline-success" style={{marginLeft:"10px"}}>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
