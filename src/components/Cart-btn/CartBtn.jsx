import { React, useEffect, useRef } from 'react';
import './CartBtn.css';

const CartButton = props => {

  const button = useRef();
  const fullPrice = localStorage.getItem("fullPrice") || 0;
  const pageState = props.pageState;

  useEffect(() => {
    if (pageState === 'mobile') {
      button.current.style.display = 'flex';

      button.current.onclick = () => {
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
      }
    }
  })

  return ( 
    <button className="cartBtn" ref={button}>
      <i className='cart-img'>
        <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.00008 5.41384L0.75708 2.17184L2.17208 0.756836L5.41408 3.99984H20.6561C20.8119 3.99983 20.9657 4.03625 21.1049 4.1062C21.2442 4.17616 21.3652 4.2777 21.4583 4.40273C21.5514 4.52776 21.6139 4.67282 21.641 4.82632C21.668 4.97983 21.6588 5.13753 21.6141 5.28684L19.2141 13.2868C19.1523 13.4929 19.0258 13.6736 18.8532 13.802C18.6806 13.9305 18.4712 13.9999 18.2561 13.9998H6.00008V15.9998H17.0001V17.9998H5.00008C4.73486 17.9998 4.48051 17.8945 4.29297 17.7069C4.10544 17.5194 4.00008 17.2651 4.00008 16.9998V5.41384ZM6.00008 5.99984V11.9998H17.5121L19.3121 5.99984H6.00008ZM5.50008 21.9998C5.10226 21.9998 4.72072 21.8418 4.43942 21.5605C4.15812 21.2792 4.00008 20.8977 4.00008 20.4998C4.00008 20.102 4.15812 19.7205 4.43942 19.4392C4.72072 19.1579 5.10226 18.9998 5.50008 18.9998C5.8979 18.9998 6.27944 19.1579 6.56074 19.4392C6.84204 19.7205 7.00008 20.102 7.00008 20.4998C7.00008 20.8977 6.84204 21.2792 6.56074 21.5605C6.27944 21.8418 5.8979 21.9998 5.50008 21.9998ZM17.5001 21.9998C17.1023 21.9998 16.7207 21.8418 16.4394 21.5605C16.1581 21.2792 16.0001 20.8977 16.0001 20.4998C16.0001 20.102 16.1581 19.7205 16.4394 19.4392C16.7207 19.1579 17.1023 18.9998 17.5001 18.9998C17.8979 18.9998 18.2794 19.1579 18.5607 19.4392C18.842 19.7205 19.0001 20.102 19.0001 20.4998C19.0001 20.8977 18.842 21.2792 18.5607 21.5605C18.2794 21.8418 17.8979 21.9998 17.5001 21.9998Z" fill="#fff" />
        </svg>
      </i>
      <span className='cart-info'> ₴ {parseFloat(fullPrice).toFixed(2)}</span>
    </button>
  );
}

export default CartButton;