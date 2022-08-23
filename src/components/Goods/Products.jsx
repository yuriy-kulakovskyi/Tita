import React from 'react'
import Roles from './Roles/Roles';
import "./Products.css";

const Products = props => {
  return (
    <div className="products-page" ref={props.refSend}>
      <main className="hero container">
        <Roles 
        price = {props.price}
        updatePrice = {props.updatePrice} />
      </main>
    </div>
  );
}

export default Products;