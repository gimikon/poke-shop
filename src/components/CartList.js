import React from 'react'
import CartItem from './CartItem'

export default function CartList({value}) {
 
 const {pokemonInCart} =value


  return (
    <div className="container-fluid" style={{minHeight:'40vh'}} >
      {pokemonInCart.map((item) => {
        return <CartItem key={item.id} item={item} value={value}/>
      })}
      
    </div>
  )
}
