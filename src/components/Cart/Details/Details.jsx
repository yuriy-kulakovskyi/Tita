import './Details.css';

const products = JSON.parse(localStorage.getItem("products")) || [];
const fullPrice = localStorage.getItem("fullPrice");

const Details = () => {
  const hideLabel = props => {
    props.nativeEvent.path[1].lastChild.style.display = 'none';

    setTimeout(() => {
      if (props.target.value != '') {
        props.nativeEvent.path[1].lastChild.style.display = 'none';
      } else {
        props.nativeEvent.path[1].lastChild.style.display = 'block';
      }
    }, 5000);
  }

  const clearLocalStorageValues = () => {
    localStorage.removeItem("products");
    localStorage.removeItem("fullPrice");
    localStorage.setItem("page", 'home');
  }

  return ( 
    <div className="details">
      <form 
        action="https://formspree.io/f/xwkzvnlv"
        method="POST"
        className="details__form container"
      >
        <div className="left-form-content">
          <h1 className="form__title">Деталі замовлення</h1>
          <div className="form__inputs">
            <div className="form__input-row first-row">
              <fieldset>
                <input className="form__input row-input" name='nameInp' onClick={hideLabel} />
                <label for="nameInp">Ваше ім'я <span className='redStar'>*</span></label>
              </fieldset>
              <fieldset>
                <input className="form__input row-input" name='surNameInp' onClick={hideLabel} />
                <label for="surNameInp">Ваше прізвище <span className='redStar'>*</span></label>
              </fieldset>
            </div>
            <fieldset>
              <input type="text" name='streetInp' className="form__input" onClick={hideLabel} />
              <label for="streetInp">Назва вулиці <span className='redStar'>*</span></label>
            </fieldset>
            <div className="form__input-row second-row">
              <fieldset>
                <input type="text" className="form__input row-input" name='house' onClick={hideLabel} />
                <label for="house">Будинок <span className='redStar'>*</span></label>
              </fieldset>
              <fieldset>
                <input type="text" className="form__input row-input" name='flat' onClick={hideLabel} />
                <label for="flat">Квартира</label>
              </fieldset>
              <fieldset>
                <input type="text" className="form__input row-input" name='entrance' onClick={hideLabel}  />
                <label for="entrance">Підʼїзд</label>
              </fieldset>
            </div>
            <fieldset>
              <input type="text" className="form__input" name='cityOrVillage' onClick={hideLabel} />
              <label for="cityOrVillage">Місто / Село <span className='redStar'>*</span></label>
            </fieldset>
            <fieldset>
              <input type="text" className="form__input" name='postalCode' onClick={hideLabel} />
              <label for="postalCode">Поштовий код / ZIP <span className='redStar'>*</span></label>
            </fieldset>
            <fieldset>
              <input type="text" className="form__input" name='phone' onClick={hideLabel} />
              <label for="phone">Телефон <span className='redStar'>*</span></label>
            </fieldset>
            <fieldset>
              <input type="text" className="form__input" name='email' onClick={hideLabel} />
              <label for="email">Адреса електорнної пошти <span className='redStar'>*</span></label>
            </fieldset>
            <fieldset>
              <textarea name="additionalInfo" cols="30" rows="10" placeholder='Додаткова інформація'></textarea>
            </fieldset>
          </div>
        </div>
        <div className="right-form-content">
          <div className="content-wrap">
            <h1 className="content-wrap__title">Ваше замовлення</h1>
            <div className="content-wrap__list">
            {products.map(item => 
                <div className="content-wrap__list__item">
                  <div className="content-wrap__list__item__left-part">
                    <h1 name="product-name" className="content-wrap__list__item__left-part__name"></h1> {item.title} <span name="productNumber" style={{marginLeft: "10px"}} className='content-wrap__list__item__left-part__name'>x{item.amount}</span>
                    <p name="product-weight" className="content-wrap__list__item__left-part__weight">{item.weight}</p>
                  </div>
                  <div className="content-wrap__list__item__right-part">
                    <h4 name="product-price" className="content-wrap__list__item__right-part__price">{item.price.toFixed(2)} грн</h4>
                  </div>
                  <input name='list' type="hidden" value={'Назва продукту: ' + item.title + ' Ціна: ' + item.price.toFixed(2) + 'грн'} />
                </div>
            )}
            </div>
            <h3 className="content-wrap__price" name="full-price">До оплати: <span>{parseFloat(fullPrice).toFixed(2)} грн</span></h3>
            <div className="select">
              <select name='content-pay-method' className="select__pay-method">
                <option value="Спосіб оплати" selected disabled>Спосіб оплати</option>
                <option value="Готівка при отриманні" className="method__option">Готівка при отриманні</option>
              </select>
            </div>
            <button type='submit' className="content-wrap__confirm-order" onClick={clearLocalStorageValues}>оформити замовлення</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Details;