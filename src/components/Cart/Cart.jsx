import { React, useRef, useEffect } from 'react';
import './Cart.css';

const Cart = (componentProps) => {  
  const emptyCartAlert = useRef();
  const accessedBlock = useRef();
  const alertsBlock = useRef();
  const productsList = useRef();

  let products = JSON.parse(localStorage.getItem("products")) || [];
  let fullPrice = parseInt(localStorage.getItem("fullPrice")) || 0;

  useEffect(() => {
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < products.length - 1; j++) {
        if (products[j + 1].title === products[j].title) {
          products[j].amount += products[j + 1].amount;
          products.splice(j + 1);
        }
      }
    }
  });

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

    let pathToBlock = props.nativeEvent.path[2];
    let pathToTitle = props.nativeEvent.path[1].lastChild.lastChild.children[0].innerText.substr(0, props.nativeEvent.path[1].lastChild.children[1].firstChild.childNodes[0].length);

    for (let item of products) {
      console.log(pathToBlock);
      if (item.title === pathToTitle) {
        fullPrice -= parseInt(item.price);
        console.log(fullPrice);
        document.querySelector(".cart-info").innerText = 'Корзина ₴' + parseFloat(fullPrice).toFixed(2);
        componentProps.updatePrice(parseInt(fullPrice));
        pathToBlock.style.display = 'none';
        products.splice(item, 1);

        if (products.length <= 0) {
          alertsBlock.current.style.display = 'flex';
          accessedBlock.current.style.display = 'none';
        }
      }
    }
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("fullPrice", fullPrice);
  }

  const stepClick = eventProps => {
    if (eventProps.nativeEvent.path[1].lastChild.data.toLowerCase() === 'деталі замовлення') {
      if (products.length === null || products.length === undefined || products.length === 0) {
        emptyCartAlert.current.style.display = 'flex';
      }
    }
  }

  return (
    <div className="cart">
      <div className="cart-wrap container">
        <h1 className="cart-wrap__title">оформлення замовлення</h1>
        <div className="cart-wrap__slider order-steps">
          <ul>
            <li className="cart-step step__item">
              <button className='cart__btn'>
                <span className="step active">1</span>
                Кошик
              </button>
            </li>
            <div className="item__after-line"></div>
            <li className="checkout step__item">
              <button className='cart__btn' onClick={stepClick}>
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
      </div>
    </div>
  )
}

export default Cart;