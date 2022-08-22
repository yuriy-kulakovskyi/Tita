// Main links
import React from 'react';
import './App.css';

// Components
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Products from './components/Goods/Products';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pageStyles = React.createRef();
    this.products = React.createRef();
  }

  switchSection = props => {
    if (props.target.innerText.toLowerCase() === 'роли та суші') {
      this.pageStyles.current.style.display = 'none';
      this.products.current.style.display = 'flex';
    }
  }

  render() {
    return (
      <div className="App">
        <div className='mainPage' ref={this.pageStyles}>
          <Header 
          switchSectionFunction = {this.switchSection} />
          <Menu />
          <Home />
          <About />
          <Footer />
        </div>
        <Products refSend={this.products} />
      </div>
    );
  }
}

export default App;
