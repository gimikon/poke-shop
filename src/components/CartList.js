import React from 'react'
import CartItem from './CartItem'

export default function CartList({value}) {
 
 const {pokemonInCart} =value
 console.log("from cartlist", value, pokemonInCart)

  return (
    <div className="container-fluid">
      {pokemonInCart.map((item) => {
        return <CartItem key={item.id} item={item} value={value}/>
      })}
      
    </div>
  )
}