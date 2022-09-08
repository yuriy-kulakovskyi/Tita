import { React, useRef, useEffect } from 'react';
import './Cart.css';
import Details from './Details/Details';

const Cart = componentProps => {  
  const emptyCartAlert = useRef();
  const accessedBlock = useRef();
  const alertsBlock = useRef();
  const productsList = useRef();
  const details = useRef();

  let products = JSON.parse(localStorage.getItem("products")) || [];
  let fullPrice = parseInt(localStorage.getItem("fullPrice")) || 0;

  useEffect(() => {
    if (localStorage.getItem("page") === 'cart') {
      document.querySelector(".mainPage").style.display = 'none';
      document.querySelector(".products-page").style.display = 'none';
      document.querySelector(".cart").style.display = 'block';

      if (fullPrice > 0) {
        document.querySelector(".accessed").style.display = 'flex';
        document.querySelector(".alerts").style.display = 'none';
      } else {
        document.querySelector(".alerts").style.display = 'flex';
        document.querySelector(".accessed").style.display = 'none';
      }
    } else if (localStorage.getItem("page") === 'details') {
      if (products.length > 0) {
        details.current.lastElementChild.style.backgroundColor = '#e11f1d';
        details.current.lastElementChild.style.color = '#fff';
        document.querySelector(".details").style.display = 'flex';
      } else {
        localStorage.setItem("page", "cart");
        details.current.lastElementChild.style.backgroundColor = 'transparent';
        details.current.lastElementChild.style.color = '#000';
        document.querySelector(".details").style.display = 'none';
      }
    } else {
      details.current.lastElementChild.style.backgroundColor = 'transparent';
      details.current.lastElementChild.style.color = '#000';
    }
  });

  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length - 1; j++) {
      if (products[j + 1].title === products[j].title) {
        products[j].amount += products[j + 1].amount;
        products.splice(j + 1);
      }
    }
  }

  const minusClick = props => {
    let titleOfBlock = props.nativeEvent.path[3].firstChild.children[1].children[1].firstChild.innerText.substr(0, props.nativeEvent.path[3].firstChild.children[1].lastChild.firstChild.childNodes[0].length);
    for (let item of products) {
      if (titleOfBlock === item.title) {
        if (item.amount > 1) {
          item.amount--;
          item.price -= item.priceOfOne;
          fullPrice -= item.priceOfOne;
          props.target.nextSibling.innerText--;
          props.nativeEvent.path[3].firstChild.children[1].lastChild.children[0].children[0].innerText = 'x' + item.amount;
          props.nativeEvent.path[2].lastChild.innerText = parseFloat(item.price).toFixed(2) + 'грн';
          document.querySelector(".cart-info").innerText = 'Корзина ₴' + parseFloat(fullPrice).toFixed(2);
          componentProps.updatePrice(parseInt(fullPrice));
        }
      }
    }
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("fullPrice", fullPrice);
  }

  const plusClick = props => {
    let titleOfBlock = props.nativeEvent.path[3].firstChild.children[1].children[1].firstChild.innerText.substr(0, props.nativeEvent.path[3].firstChild.children[1].lastChild.firstChild.childNodes[0].length);
    for (let item of products) {
      if (titleOfBlock === item.title) {
        item.amount++;
        item.price += parseInt(item.priceOfOne);
        fullPrice += parseInt(item.priceOfOne);
        props.nativeEvent.path[1].children[1].innerText = item.amount;
        props.nativeEvent.path[3].firstChild.children[1].lastChild.firstChild.children[0].innerText = 'x' + item.amount;
        props.nativeEvent.path[1].nextSibling.innerText = parseFloat(item.price).toFixed(2) + 'грн';
        document.querySelector(".cart-info").innerText = 'Корзина ₴' + parseFloat(fullPrice).toFixed(2);
        componentProps.updatePrice(parseInt(fullPrice));
      }
    }
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("fullPrice", fullPrice);
  }

  const crossClick = props => {

    localStorage.setItem("page", "cart");
    const pathToBlock = props.nativeEvent.path[2];
    const pathToTitle = props.nativeEvent.path[1].lastChild.lastChild.children[0].innerText.substr(0, props.nativeEvent.path[1].lastChild.children[1].firstChild.childNodes[0].length);

    for (let item of products) {
      if (item.title === pathToTitle) {
        pathToBlock.style.display = 'none';
        fullPrice -= parseInt(item.price);
        document.querySelector(".cart-info").innerText = 'Корзина ₴ ' + parseFloat(fullPrice).toFixed(2);
        componentProps.updatePrice(parseInt(fullPrice));
        products.splice(products.indexOf(item), 1);
        document.location.reload();

        localStorage.setItem("fullPrice", fullPrice);
        localStorage.setItem("products", JSON.stringify(products));

        if (fullPrice <= 0) {
          alertsBlock.current.style.display = 'flex';
          accessedBlock.current.style.display = 'none';
        }
      }
    }
  }

  const stepClick = eventProps => {
    console.log(eventProps);
    if (eventProps.nativeEvent.path[1].lastChild.data.toLowerCase() === 'деталі замовлення') {
      localStorage.setItem("page", "details");
      document.location.reload();
      if (products.length === null || products.length === undefined || products.length === 0) {
        emptyCartAlert.current.style.display = 'flex';
      } else {
        document.querySelector(".accessed").style.display = 'none';
        document.querySelector(".details").style.display = 'flex';
        eventProps.target.style.backgroundColor = '#e11f1d';
        eventProps.target.style.color = '#fff';
      }
    } else if (eventProps.nativeEvent.path[1].lastChild.data.toLowerCase() === 'кошик') {
      localStorage.setItem("page", "cart");
      document.location.reload();
    }
  }

  return (
    <div className="cart">
      <div className="cart-wrap container">
        <h1 className="cart-wrap__title">оформлення замовлення</h1>
        <div className="cart-wrap__slider order-steps">
          <ul>
            <li className="cart-step step__item">
              <button className='cart__btn' onClick={stepClick}>
                <span className="step active">1</span>
                Кошик
              </button>
            </li>
            <div className="item__after-line"></div>
            <li className="checkout step__item">
              <button className='cart__btn' ref={details} onClick={stepClick}>
                <span className="step">2</span>
                Деталі замовлення
              </button>
            </li>
            <div className="item__after-line"></div>
            <li className="complete step__item">
              <button className='cart__btn'>
                <span className="step last">3</span>
                Чек замовлення
              </button>
            </li>
          </ul>
        </div>

        <div className="alerts" ref={alertsBlock}>
          <div className="cart-wrap__alert bin-alert" ref={emptyCartAlert}>
            <div className="alert__line"></div>
            <p className="alert__info">Оформлення замовлення недоступне, доки ваш кошик порожній.</p>
          </div>
          <div className="cart-wrap__alert cart-alert">
            <div className="alert__line"></div>
            <p className="alert__info">Ваш кошик порожній.</p>
          </div>
          <button className="cart-wrap__button return-btn">повернутись в магазин</button>
        </div>

        <div className="accessed" ref={accessedBlock}>
          <div className="orders-list">
            <div className="list__item" ref={productsList}>
              <div className="item__characteristics">
                <div className="left-part">
                  <h6 className="name">Продукт</h6>
                </div>
                <div className="right-part">
                  <h6 className="name">Вартість одиниці</h6>
                  <h6 className="name">К-ть</h6>
                  <h6 className="name">Сума</h6>
                </div>
              </div>
              {products.map(item => 
                <div className="item__product-wrapper">
                  <div className="left-part">
                    <div className="cross" onClick={crossClick}>×</div>
                    <div className="product">
                      <div className="image" style={{backgroundImage: `url(${item.img})`}}></div>
                      <div className="description">
                        <h1 className="description__title">{item.title} <span className='length'>x{item.amount}</span></h1>
                        <p className="description__paragraph">{item.weight}</p>
                      </div>
                    </div>
                  </div>
                  <div className="right-part">
                    <h3 className="priceOfOne">{parseFloat(item.priceOfOne).toFixed(2)} грн</h3>
                    <div className="setNumber">
                      <button className="selection__button minus" onClick={minusClick}>-</button>
                      <h3 className="selection__number">{item.amount}</h3>
                      <button className="selection__button plus" onClick={plusClick}>+</button>
                    </div>
                    <h3 className="price">{parseFloat(item.price).toFixed(2)} грн</h3>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="do-order">
            <div className="payment">
              <h4 className="price">До оплати: <span>{parseFloat(localStorage.getItem("fullPrice")).toFixed(2)} грн</span></h4>
            </div>
            <p className="comment">* Вартість доставки уточнюється з консультантом</p>
            <button className="order__btn">перейти до оформлення</button>
          </div>
        </div>

        <Details />
      </div>
    </div>
  )
}

export default Cart;