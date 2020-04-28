import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default class Modal extends Component {
  render() {

    
  
    return (
      <ModalContainer>
        <div className="container">
          <div className="row">
            <div
              id="modal"
              className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
            >
              <h5>{this.props.name} added to the cart</h5>
              <p>$ {this.props.price}</p>
              <img src={this.props.img} className="img-fluid" style={{width:"10em", height:"10em"}}/>
              
              <button onClick={this.props.closeModal} style={{display:'block', margin:"0 auto", color:'white', backgroundColor:'orange', borderRadius:"2rem", marginTop:"px"}}>Back to Store</button>
             
            </div>
          </div>
        </div>
      </ModalContainer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
    border-radius:2rem;
  }
  z-index:2;
`;
