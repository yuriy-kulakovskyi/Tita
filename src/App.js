import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Home />
      <About />
    </div>
  );
}

export default App;
