import React from 'react';

import "./Home.css";
import Carousel from './Carousel/Carousel';

class Home extends React.Component {
  render() {
    return (
      <section className='home'>
        <div className="home__header">
          <h1 className="home__title">доставка wok дрогобич</h1>
          <p className="home__description">Замовляйте справжній азійський Вок за найкращими цінами</p>
          <button className='home__btn btn-make-an-order'>зробити замовлення</button>
        </div>
        <Carousel />
      </section>
    );
  }
}

export default Home