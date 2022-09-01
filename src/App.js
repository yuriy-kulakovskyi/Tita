// Main links
import React from 'react';
import './App.css';
import { useState } from 'react';


// Components
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Products from './components/Goods/Products';
import Cart from './components/Cart/Cart';
import CartButton from './components/Cart-btn/CartBtn';


function App () {
  const pageStyles = React.createRef();
  const products = React.createRef();
  const [price, updatePrice] = useState(0);

  let pageState;
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    pageState = 'mobile';
  }else{
    pageState = 'not mobile';
  }

  return (
    <div className="App">
      <Menu
        pageStyles = {pageStyles}
        products = {products} />

      <Header 
        pageStyles = {pageStyles}
        products = {products}
        price = {price} />

      <div className='mainPage' ref={pageStyles}>
        <Home />
        <About />
      </div>

      <Products 
        refSend={products}
        price = {price}
        updatePrice = {updatePrice}
        className="products-page" />

      <Cart
        className='cart-page'
        updatePrice = {updatePrice} />

      <Footer />

      <CartButton
        pageState = {pageState}
      />
    </div>
  );
}

export default App;
