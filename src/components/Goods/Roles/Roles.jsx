import React from 'react';
import Filter from './Filter';
import "./Roles.css";

// Images
import sushiBlackCheese from './img/black-cheese.jpeg';
import tuna from './img/tuna.jpeg';
import bakedRoll from './img/bakedRoll.jpeg';
import bakedRollWithShrimps from './img/bakedRollWithShrimps.jpeg';

const Roles = props => {
  const minus = eventProps => {
    if (eventProps.target.nextSibling.innerText > 1) {
      eventProps.target.nextSibling.innerText--;
    }
  }

  const plus = eventProps => {
    eventProps.nativeEvent.path[1].children[1].innerText++;
  }

  const setPrice = eventProps => {
    eventProps.target.firstChild.innerHTML = `<svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="16px" height="17px"><path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"/></svg>`;
    let productPrice = ((eventProps.target.lastChild.data).substr(0, (eventProps.target.lastChild.data).length - 4));
    props.updatePrice(props.price + (productPrice * (eventProps.nativeEvent.path[1].children[1].children[1]).innerText));
    eventProps.target.disabled = true;
  }

  return (
    <div className='roles'>
      <Filter />
      <div className="roles-wrap">
        <div className="roles-wrap__row">
          <div className="roles-wrap__row__element">
            <div className="element__image">
              <img src={sushiBlackCheese} alt="Sushi Black Cheese" className="image" />
            </div>
            <div className="element__info">
              <a href='#' className="info__title">Black cheese</a>
              <h5 className="info__good__weight">210 г</h5>
              <p className="info__paragraph">Рис, норі, чорнило каракатиці, сир пармезан, тунець обпалений, сир тостовий, сирний соус.</p>
              <div className="info__buy-row">
                <button className="row__cart" onClick={setPrice}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M2.66676 4.77605L0.504761 2.61472L1.44809 1.67139L3.60943 3.83339H13.7708C13.8747 3.83338 13.9771 3.85766 14.07 3.9043C14.1629 3.95093 14.2435 4.01863 14.3056 4.10198C14.3676 4.18534 14.4093 4.28204 14.4274 4.38438C14.4454 4.48671 14.4392 4.59185 14.4094 4.69139L12.8094 10.0247C12.7683 10.1621 12.6839 10.2826 12.5688 10.3682C12.4538 10.4538 12.3142 10.5001 12.1708 10.5001H4.00009V11.8334H11.3334V13.1667H3.33343C3.15662 13.1667 2.98705 13.0965 2.86202 12.9715C2.737 12.8464 2.66676 12.6769 2.66676 12.5001V4.77605ZM4.00009 5.16672V9.16672H11.6748L12.8748 5.16672H4.00009ZM3.66676 15.8334C3.40154 15.8334 3.14719 15.728 2.95965 15.5405C2.77212 15.353 2.66676 15.0986 2.66676 14.8334C2.66676 14.5682 2.77212 14.3138 2.95965 14.1263C3.14719 13.9387 3.40154 13.8334 3.66676 13.8334C3.93198 13.8334 4.18633 13.9387 4.37387 14.1263C4.5614 14.3138 4.66676 14.5682 4.66676 14.8334C4.66676 15.0986 4.5614 15.353 4.37387 15.5405C4.18633 15.728 3.93198 15.8334 3.66676 15.8334ZM11.6668 15.8334C11.4015 15.8334 11.1472 15.728 10.9597 15.5405C10.7721 15.353 10.6668 15.0986 10.6668 14.8334C10.6668 14.5682 10.7721 14.3138 10.9597 14.1263C11.1472 13.9387 11.4015 13.8334 11.6668 13.8334C11.932 13.8334 12.1863 13.9387 12.3739 14.1263C12.5614 14.3138 12.6668 14.5682 12.6668 14.8334C12.6668 15.0986 12.5614 15.353 12.3739 15.5405C12.1863 15.728 11.932 15.8334 11.6668 15.8334Z" fill="white" />
                  </svg>
                  120 грн
                </button>
                <div className="row__select-number">
                  <button className="selection__button minus" onClick={minus}>-</button>
                  <h3 className="selection__number">1</h3>
                  <button className="selection__button plus" onClick={plus}>+</button>
                </div>
              </div>
            </div>
            <div className="afterLine"></div>
          </div>
          <div className="roles-wrap__row__element">
            <div className="element__image">
              <img src={tuna} alt="Tuna Tataki" className="image" />
            </div>
            <div className="element__info">
              <a href='#' className="info__title">Туна татакі</a>
              <h5 className="info__good__weight">195 г</h5>
              <p className="info__paragraph">Рис, обпалений тунець, манго, вершковий сир, ікра лосося, чорнило каракатиці.</p>
              <div className="info__buy-row">
                <button className="row__cart" onClick={setPrice}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M2.66676 4.77605L0.504761 2.61472L1.44809 1.67139L3.60943 3.83339H13.7708C13.8747 3.83338 13.9771 3.85766 14.07 3.9043C14.1629 3.95093 14.2435 4.01863 14.3056 4.10198C14.3676 4.18534 14.4093 4.28204 14.4274 4.38438C14.4454 4.48671 14.4392 4.59185 14.4094 4.69139L12.8094 10.0247C12.7683 10.1621 12.6839 10.2826 12.5688 10.3682C12.4538 10.4538 12.3142 10.5001 12.1708 10.5001H4.00009V11.8334H11.3334V13.1667H3.33343C3.15662 13.1667 2.98705 13.0965 2.86202 12.9715C2.737 12.8464 2.66676 12.6769 2.66676 12.5001V4.77605ZM4.00009 5.16672V9.16672H11.6748L12.8748 5.16672H4.00009ZM3.66676 15.8334C3.40154 15.8334 3.14719 15.728 2.95965 15.5405C2.77212 15.353 2.66676 15.0986 2.66676 14.8334C2.66676 14.5682 2.77212 14.3138 2.95965 14.1263C3.14719 13.9387 3.40154 13.8334 3.66676 13.8334C3.93198 13.8334 4.18633 13.9387 4.37387 14.1263C4.5614 14.3138 4.66676 14.5682 4.66676 14.8334C4.66676 15.0986 4.5614 15.353 4.37387 15.5405C4.18633 15.728 3.93198 15.8334 3.66676 15.8334ZM11.6668 15.8334C11.4015 15.8334 11.1472 15.728 10.9597 15.5405C10.7721 15.353 10.6668 15.0986 10.6668 14.8334C10.6668 14.5682 10.7721 14.3138 10.9597 14.1263C11.1472 13.9387 11.4015 13.8334 11.6668 13.8334C11.932 13.8334 12.1863 13.9387 12.3739 14.1263C12.5614 14.3138 12.6668 14.5682 12.6668 14.8334C12.6668 15.0986 12.5614 15.353 12.3739 15.5405C12.1863 15.728 11.932 15.8334 11.6668 15.8334Z" fill="white" />
                  </svg>
                  135 грн
                </button>
                <div className="row__select-number">
                  <button className="selection__button minus" onClick={minus}>-</button>
                  <h3 className="selection__number">1</h3>
                  <button className="selection__button plus" onClick={plus}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="roles-wrap__row">
          <div className="roles-wrap__row__element">
            <div className="element__image">
              <img src={bakedRoll} alt="Baked Roll With Mussels" className="image" />
            </div>
            <div className="element__info">
              <a href='#' className="info__title">Печений рол з мідіями</a>
              <h5 className="info__good__weight">250 г</h5>
              <p className="info__paragraph">Рис, мідії, огірок, салат Айсберг, сир моцарелла, майонез Спайсі, халапеньйо, соус Унагі, кунжут.</p>
              <div className="info__buy-row">
                <button className="row__cart" onClick={setPrice}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M2.66676 4.77605L0.504761 2.61472L1.44809 1.67139L3.60943 3.83339H13.7708C13.8747 3.83338 13.9771 3.85766 14.07 3.9043C14.1629 3.95093 14.2435 4.01863 14.3056 4.10198C14.3676 4.18534 14.4093 4.28204 14.4274 4.38438C14.4454 4.48671 14.4392 4.59185 14.4094 4.69139L12.8094 10.0247C12.7683 10.1621 12.6839 10.2826 12.5688 10.3682C12.4538 10.4538 12.3142 10.5001 12.1708 10.5001H4.00009V11.8334H11.3334V13.1667H3.33343C3.15662 13.1667 2.98705 13.0965 2.86202 12.9715C2.737 12.8464 2.66676 12.6769 2.66676 12.5001V4.77605ZM4.00009 5.16672V9.16672H11.6748L12.8748 5.16672H4.00009ZM3.66676 15.8334C3.40154 15.8334 3.14719 15.728 2.95965 15.5405C2.77212 15.353 2.66676 15.0986 2.66676 14.8334C2.66676 14.5682 2.77212 14.3138 2.95965 14.1263C3.14719 13.9387 3.40154 13.8334 3.66676 13.8334C3.93198 13.8334 4.18633 13.9387 4.37387 14.1263C4.5614 14.3138 4.66676 14.5682 4.66676 14.8334C4.66676 15.0986 4.5614 15.353 4.37387 15.5405C4.18633 15.728 3.93198 15.8334 3.66676 15.8334ZM11.6668 15.8334C11.4015 15.8334 11.1472 15.728 10.9597 15.5405C10.7721 15.353 10.6668 15.0986 10.6668 14.8334C10.6668 14.5682 10.7721 14.3138 10.9597 14.1263C11.1472 13.9387 11.4015 13.8334 11.6668 13.8334C11.932 13.8334 12.1863 13.9387 12.3739 14.1263C12.5614 14.3138 12.6668 14.5682 12.6668 14.8334C12.6668 15.0986 12.5614 15.353 12.3739 15.5405C12.1863 15.728 11.932 15.8334 11.6668 15.8334Z" fill="white" />
                  </svg>
                  115 грн
                </button>
                <div className="row__select-number">
                  <button className="selection__button minus" onClick={minus}>-</button>
                  <h3 className="selection__number">1</h3>
                  <button className="selection__button plus" onClick={plus}>+</button>
                </div>
              </div>
            </div>
            <div className="afterLine"></div>
          </div>
          <div className="roles-wrap__row__element">
            <div className="element__image">
              <img src={bakedRollWithShrimps} alt="Baked Roll With Shrimps" className="image" />
            </div>
            <div className="element__info">
              <a href='#' className="info__title">Печений рол з креветками</a>
              <h5 className="info__good__weight">250 г</h5>
              <p className="info__paragraph">Рис, креветки, салат Айсберг, огірок, майонез Спайсі, сир моцарелла, соус Шрірача, соус Світ чілі, кунжут.</p>
              <div className="info__buy-row">
                <button className="row__cart" onClick={setPrice}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M2.66676 4.77605L0.504761 2.61472L1.44809 1.67139L3.60943 3.83339H13.7708C13.8747 3.83338 13.9771 3.85766 14.07 3.9043C14.1629 3.95093 14.2435 4.01863 14.3056 4.10198C14.3676 4.18534 14.4093 4.28204 14.4274 4.38438C14.4454 4.48671 14.4392 4.59185 14.4094 4.69139L12.8094 10.0247C12.7683 10.1621 12.6839 10.2826 12.5688 10.3682C12.4538 10.4538 12.3142 10.5001 12.1708 10.5001H4.00009V11.8334H11.3334V13.1667H3.33343C3.15662 13.1667 2.98705 13.0965 2.86202 12.9715C2.737 12.8464 2.66676 12.6769 2.66676 12.5001V4.77605ZM4.00009 5.16672V9.16672H11.6748L12.8748 5.16672H4.00009ZM3.66676 15.8334C3.40154 15.8334 3.14719 15.728 2.95965 15.5405C2.77212 15.353 2.66676 15.0986 2.66676 14.8334C2.66676 14.5682 2.77212 14.3138 2.95965 14.1263C3.14719 13.9387 3.40154 13.8334 3.66676 13.8334C3.93198 13.8334 4.18633 13.9387 4.37387 14.1263C4.5614 14.3138 4.66676 14.5682 4.66676 14.8334C4.66676 15.0986 4.5614 15.353 4.37387 15.5405C4.18633 15.728 3.93198 15.8334 3.66676 15.8334ZM11.6668 15.8334C11.4015 15.8334 11.1472 15.728 10.9597 15.5405C10.7721 15.353 10.6668 15.0986 10.6668 14.8334C10.6668 14.5682 10.7721 14.3138 10.9597 14.1263C11.1472 13.9387 11.4015 13.8334 11.6668 13.8334C11.932 13.8334 12.1863 13.9387 12.3739 14.1263C12.5614 14.3138 12.6668 14.5682 12.6668 14.8334C12.6668 15.0986 12.5614 15.353 12.3739 15.5405C12.1863 15.728 11.932 15.8334 11.6668 15.8334Z" fill="white" />
                  </svg>
                  135 грн
                </button>
                <div className="row__select-number">
                  <button className="selection__button minus" onClick={minus}>-</button>
                  <h3 className="selection__number">1</h3>
                  <button className="selection__button plus" onClick={plus}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roles;