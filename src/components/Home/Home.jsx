import { React, useEffect, useRef } from 'react';

import "./Home.css";
import Carousel from './Carousel/Carousel';

const Home = () => {
  const homePage = useRef();

  useEffect(() => {
    if (localStorage.getItem("page") === 'home') {
      homePage.current.style.display = 'flex';
      document.querySelector(".mainPage").style.display = 'flex';
      document.querySelector(".cart").style.display = 'none';
    }
  });

  return (
    <section className='home' ref={homePage}>
      <div className="home__header">
        <h1 className="home__title">доставка wok дрогобич</h1>
        <p className="home__description">Замовляйте справжній азійський Вок за найкращими цінами</p>
        <button className='home__btn btn-make-an-order'>зробити замовлення</button>
      </div>
      <Carousel />
    </section>
  );
}

export default Home