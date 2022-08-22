import React from 'react'
import Footer  from '../Footer/Footer';
import Header from '../Header/Header';
import Roles from './Roles/Roles';
import "./Products.css";

const Products = props => {
  return (
    <div className="products-page" ref={props.refSend}>
      <Header />
      <main className="hero container">
        <Roles />
      </main>
      <Footer />
    </div>
  );
}

export default Products;