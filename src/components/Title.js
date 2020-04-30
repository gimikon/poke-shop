import React from "react";
import pokeball from './imges/pokeball.png'

export default function Title(props) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title capitalized">
        <h1 className=""  style={{color:'#282C34'}}>
        <strong className="">{props.name} </strong>
        <img src={pokeball} style={{height:'3rem', weigth:'2rem', marginRight:"2rem", marginLeft:"10px"}}/>
        <strong className=""  style={{color:'#282C34'}}>{props.title}</strong>
        </h1>
      </div>
    </div>
  );
}
