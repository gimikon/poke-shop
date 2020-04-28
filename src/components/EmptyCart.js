import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className="container mt-5">
    <div className="row">
    <div className="col-10 mx-auto text-center mb-6">
    <h2>The cart is currently empty</h2>
    <i class="fas fa-shopping-cart fa-5x"></i>
    <Link to="/pokemons">
    <button className='btn btn-success' style={{display:'block', margin:"0 auto", marginTop:'2rem'}}>Go Back to Shop</button>
    </Link>
    </div>
    </div>
    </div>
  )
}
