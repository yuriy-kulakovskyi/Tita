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


function App () {
  const pageStyles = React.createRef();
  const products = React.createRef();
  const [price, updatePrice] = useState(0);

  return (
    <div className="App">
      <Menu />
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
      updatePrice = {updatePrice} />
      <Footer />
    </div>
  );
}

export default App;
