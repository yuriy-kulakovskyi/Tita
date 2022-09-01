// React
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

// Styles import
import "./Header.css";

const Header = props => {
  function ClickFunc () {
    document.querySelector("section").style.display = 'none';
    document.querySelector(".about").style.display = 'none';
    document.querySelector(".header").style.display = 'none';
    document.querySelector("footer").style.display = 'none';
    document.querySelector(".header__menu").style.left = '0';
  }

  const [isActive, setIsActive] = useState(false);
  const fullPrice = localStorage.getItem("fullPrice") || 0;
  const cartVal = useRef();

  const switchSection = event => {
    if (event.target.innerText.toLowerCase() === 'роли та суші') {
      setIsActive(true);
      props.pageStyles.current.style.display = 'none';
      props.products.current.style.display = 'flex';
    }
  }

  const toHome = () => {
    document.location.reload();
  }

  const toCartSection = () => {
    document.querySelector(".mainPage").style.display = 'none';
    document.querySelector(".products-page").style.display = 'none';
    document.querySelector(".cart").style.display = 'block';
    setIsActive(false);

    let cartCheckVal = cartVal.current.innerText.substr(10);
    if (cartCheckVal > 0) {
      document.querySelector(".accessed").style.display = 'flex';
      document.querySelector(".alerts").style.display = 'none';
    } else {
      document.querySelector(".alerts").style.display = 'flex';
      document.querySelector(".accessed").style.display = 'none';
    }
  }

  return (
    // Header
    <header className='header'>
      {/* Limit for header content */}
      <div className='header-wrap container'>
        <div className='left-part'>
          {/* Logo */}
          <div className='wrap__site-branding' onClick={toHome}>
            <svg width="74" height="88" viewBox="0 0 74 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(clip0)">
                <path d="M8.52272 62.4847H0.645218V64.7437H3.36759V76H5.80035V64.7437H8.52272V62.4847ZM9.9634 62.4847V76H12.3382V62.4847H9.9634ZM21.7778 62.4847H13.9003V64.7437H16.6227V76H19.0555V64.7437H21.7778V62.4847ZM28.1564 76H30.6278L27.3069 62.4847H24.7583L21.4374 76H23.9088L24.4494 73.5479H27.6158L28.1564 76ZM24.9321 71.2889L25.4727 68.779C25.6658 67.8522 25.8781 66.3655 25.994 65.458H26.0519C26.1871 66.3655 26.3994 67.8522 26.5925 68.779L27.1331 71.2889H24.9321ZM39.6519 76.2317C42.2584 76.2317 43.7837 74.7257 43.8802 71.984H41.5054C41.4088 73.3356 40.8296 73.9341 39.6519 73.9341C38.6479 73.9341 38.0493 73.2969 38.0493 71.9454V66.5393C38.0493 65.1491 38.6479 64.512 39.6325 64.512C40.791 64.512 41.3702 65.1105 41.4475 66.5007H43.8223C43.7064 63.7397 42.2391 62.2144 39.6519 62.2144C37.1226 62.2144 35.5973 63.7397 35.5973 66.5393V71.9454C35.5973 74.7257 37.1419 76.2317 39.6519 76.2317ZM50.5809 62.4847L48.8239 68.528L46.8931 62.4847H44.3831L47.762 72.1964C47.3179 73.7024 46.8931 74.0885 45.8505 74.0885H45.2713V76.2124H45.7733C48.0323 76.2124 49.0363 75.5752 49.8665 72.9108L53.0715 62.4847H50.5809ZM54.3294 76H67.4779V62.4847H65.1417V73.741H62.0717V62.4847H59.7355V73.741H56.6656V62.4847H54.3294V76ZM70.0357 62.4847V76H72.4105V62.4847H70.0357Z" fill="white" />
                <path d="M42.7823 24.7051V34.082H51.8255C51.8508 32.8549 51.6304 31.6351 51.1774 30.4945C50.7243 29.3538 50.0477 28.3152 49.1874 27.4399C48.3711 26.5606 47.379 25.8628 46.2756 25.3917C45.1722 24.9205 43.982 24.6866 42.7823 24.7051Z" fill="white" />
                <path d="M2.63996 43.5584C1.78022 44.4342 1.10401 45.4728 0.650992 46.6134C0.197978 47.7539 -0.0227187 48.9735 0.00184702 50.2005H8.79556H10.8287C12.4325 50.1959 14.0164 49.8449 15.4719 49.1714C16.9429 48.3846 18.2517 47.3265 19.3293 46.0531L23.7449 40.8267L42.115 17.3956H48.0679C48.6275 17.41 49.1785 17.537 49.688 17.769C50.1975 18.0009 50.6551 18.3332 51.0334 18.7458L62.0848 32.822C64.9818 36.4735 64.0463 40.8267 64.0463 40.8267H40.8926C39.2867 40.8394 37.7025 41.2001 36.2494 41.8839C34.7779 42.6699 33.4689 43.7281 32.392 45.0022L27.9765 50.2285H63.7625C63.7625 50.2285 68.5928 50.5404 71.5583 46.9543C73.7162 44.3318 74 42.5262 74 39.1771C74 34.3157 73.0645 33.692 71.786 31.8366L56.3814 12.191C55.4991 11.0594 54.4258 10.0906 53.21 9.32842C51.798 8.50102 50.1997 8.04406 48.5637 8H39.0466L38.9031 8.18398V8.00935H29.8599C29.8347 9.23644 30.055 10.4562 30.5081 11.5969C30.9611 12.7375 31.6377 13.7761 32.498 14.6514C32.7537 14.8995 33.0233 15.1327 33.3057 15.3499L25.962 24.7049L16.9188 36.2615C16.5216 35.5125 16.0255 34.8202 15.4439 34.2034C14.6293 33.3261 13.6398 32.6294 12.5392 32.1583C11.4386 31.6873 10.2514 31.4523 9.05438 31.4686H0.0112028C-0.0126636 32.6955 0.208354 33.9149 0.66133 35.0553C1.1143 36.1958 1.79014 37.2345 2.64932 38.1107C3.46452 38.987 4.45425 39.6827 5.55473 40.1532C6.65522 40.6237 7.84206 40.8585 9.03879 40.8423H9.05438C7.8546 40.8205 6.66362 41.051 5.55863 41.5189C4.45363 41.9868 3.45926 42.6817 2.63996 43.5584Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="74" height="87.8001" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {/* Nav buttons */}
          <nav className='wrap__nav'>
            <div className='primary-navigation' id='primary'>
              <ul className='navigation__menu'>
                <li className='menu__item about-item'>
                  <a href='#' className='item__link about-us'><span className='beforeLine'></span> Про нас</a>
                  <span className='afterLine'></span>
                </li>
                <li className='menu__item'>
                  <a href='#' className='item__link contacts'><span className='beforeLine'></span> Контакти</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className='right-part'>
          {/* Phone numbers and city selection */}
          <div className='header-phone-number'>
            <div className='header-city-name'>
              <h5 className='comment'>Ваше місто: <span className='cityName' id='city'> Самбір <span className='arrow-icon'><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 4L6 7L9 4L10 5L6 9L2 5L3 4Z" fill="#E11F1D" />
              </svg>
              </span></span></h5>
            </div>
            <h1 className='city-phone-number' id='phoneNumber'>+38 093 8311 778</h1>
          </div>

          {/* Menu toggle button */}
          <button className='menu-toggle' onClick={ClickFunc}>
            <span className='menu-icon'>
              <div className='icon-line'></div>
              <div className='icon-line'></div>
              <div className='icon-line'></div>
            </span>
          </button>

          {/* Cart button */}
          <button className='header__cart-button' onClick={toCartSection}>
            <i className='cart-img'>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.00008 5.41384L0.75708 2.17184L2.17208 0.756836L5.41408 3.99984H20.6561C20.8119 3.99983 20.9657 4.03625 21.1049 4.1062C21.2442 4.17616 21.3652 4.2777 21.4583 4.40273C21.5514 4.52776 21.6139 4.67282 21.641 4.82632C21.668 4.97983 21.6588 5.13753 21.6141 5.28684L19.2141 13.2868C19.1523 13.4929 19.0258 13.6736 18.8532 13.802C18.6806 13.9305 18.4712 13.9999 18.2561 13.9998H6.00008V15.9998H17.0001V17.9998H5.00008C4.73486 17.9998 4.48051 17.8945 4.29297 17.7069C4.10544 17.5194 4.00008 17.2651 4.00008 16.9998V5.41384ZM6.00008 5.99984V11.9998H17.5121L19.3121 5.99984H6.00008ZM5.50008 21.9998C5.10226 21.9998 4.72072 21.8418 4.43942 21.5605C4.15812 21.2792 4.00008 20.8977 4.00008 20.4998C4.00008 20.102 4.15812 19.7205 4.43942 19.4392C4.72072 19.1579 5.10226 18.9998 5.50008 18.9998C5.8979 18.9998 6.27944 19.1579 6.56074 19.4392C6.84204 19.7205 7.00008 20.102 7.00008 20.4998C7.00008 20.8977 6.84204 21.2792 6.56074 21.5605C6.27944 21.8418 5.8979 21.9998 5.50008 21.9998ZM17.5001 21.9998C17.1023 21.9998 16.7207 21.8418 16.4394 21.5605C16.1581 21.2792 16.0001 20.8977 16.0001 20.4998C16.0001 20.102 16.1581 19.7205 16.4394 19.4392C16.7207 19.1579 17.1023 18.9998 17.5001 18.9998C17.8979 18.9998 18.2794 19.1579 18.5607 19.4392C18.842 19.7205 19.0001 20.102 19.0001 20.4998C19.0001 20.8977 18.842 21.2792 18.5607 21.5605C18.2794 21.8418 17.8979 21.9998 17.5001 21.9998Z" fill="#E11F1D" />
              </svg>
            </i>
            <span className='cart-info' ref={cartVal}>Корзина ₴ {parseFloat(fullPrice).toFixed(2)}</span>
          </button>
          {/* Profile block */}
          <div className='wrap__profile'>
            <a href='#'>
              <div className='profile-img'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path xmlns="http://www.w3.org/2000/svg" d="M12 2C9.243 2 7 4.243 7 7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7C17 4.243 14.757 2 12 2ZM12 10C10.346 10 9 8.654 9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7C15 8.654 13.654 10 12 10ZM21 21V20C21 16.141 17.859 13 14 13H10C6.14 13 3 16.141 3 20V21H5V20C5 17.243 7.243 15 10 15H14C16.757 15 19 17.243 19 20V21H21Z" fill="#E11F1D" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='afterWrap container'></div>

      {/* The second part of the header (bottom part) */}
      <div className='secondary-wrap container'>
        <ul className='listOfLinks'>
          <li className='link-item'>
            <button className='item-link' 
              style={{
                borderBottom: isActive ? '1px solid #ff3c00': ''
              }} 
              onClick={switchSection}>
              <div className='link-img'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                  <path d="M28.4895 8.6085C28.4782 8.5995 28.4737 8.58825 28.4625 8.57925C28.4377 8.56125 28.4108 8.559 28.386 8.5455C26.3025 7.4025 23.913 6.75 21.375 6.75H7.875C3.5325 6.75 0 10.2825 0 14.625C0 16.0898 0.94275 17.3272 2.25 17.793V24.75C2.25 27.2318 4.26825 29.25 6.75 29.25H29.25C31.7318 29.25 33.75 27.2318 33.75 24.75V22.0522C33.9367 22.1557 34.1302 22.2458 34.317 22.3515C34.4902 22.4505 34.6838 22.5 34.875 22.5C35.0708 22.5 35.2643 22.4505 35.4398 22.3492C35.7863 22.1467 36 21.7755 36 21.375C36 15.894 32.9647 11.1128 28.4895 8.6085ZM21.375 9C23.085 9 24.6982 9.37575 26.1788 10.0058C25.0763 11.8665 24.3337 13.9837 23.9535 16.3282C21.9667 15.984 19.9575 15.75 17.9303 15.75H17.3228C18.0112 12.5392 19.4153 10.3658 20.637 9H21.375ZM17.784 9C16.659 10.6245 15.588 12.843 15.0367 15.75H9.44775C10.1362 12.5392 11.5402 10.3658 12.762 9H17.784ZM3.375 15.75C2.754 15.75 2.25 15.246 2.25 14.625C2.25 11.5245 4.7745 9 7.875 9H9.91125C8.78625 10.6245 7.71525 12.843 7.164 15.75H3.375ZM31.5 24.75C31.5 25.9897 30.4897 27 29.25 27H6.75C5.51025 27 4.5 25.9897 4.5 24.75V18H17.9303C22.6147 18 27.2453 19.0193 31.5 20.9363V24.75ZM33.1605 19.2352C33.0952 19.1992 33.0277 19.17 32.9535 19.1475C30.771 18.1215 28.5008 17.3003 26.163 16.7378C26.5005 14.6205 27.1688 12.7238 28.1588 11.0722C30.9938 12.9465 33.039 15.9277 33.5947 19.4197C33.4552 19.35 33.3045 19.3027 33.1605 19.2352Z" fill="white" />
                </svg>
              </div>
              роли та суші
            </button>
          </li>

          <li className='link-item'>
            <button className='item-link'>
              <div className='link-img'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                  <path d="M27 2.25C21.9533 2.25 18 4.7205 18 7.875C18 4.7205 14.0468 2.25 9 2.25C3.95325 2.25 0 4.7205 0 7.875V16.875C0 20.0295 3.95325 22.5 9 22.5V28.125C9 31.2795 12.9532 33.75 18 33.75C23.0467 33.75 27 31.2795 27 28.125V22.5C32.0467 22.5 36 20.0295 36 16.875V7.875C36 4.7205 32.0467 2.25 27 2.25ZM9 4.5C12.978 4.5 15.75 6.27975 15.75 7.875C15.75 9.47025 12.978 11.25 9 11.25C5.022 11.25 2.25 9.47025 2.25 7.875C2.25 6.27975 5.022 4.5 9 4.5ZM9 19.125V20.25C5.022 20.25 2.25 18.4702 2.25 16.875V11.5988C3.888 12.762 6.27075 13.5 9 13.5C11.7292 13.5 14.112 12.762 15.75 11.5988V13.6912C11.8328 14.3033 9 16.461 9 19.125ZM24.75 28.125C24.75 29.7202 21.978 31.5 18 31.5C14.022 31.5 11.25 29.7202 11.25 28.125V22.8487C12.888 24.012 15.2708 24.75 18 24.75C20.7292 24.75 23.112 24.012 24.75 22.8487V28.125ZM18 22.5C14.022 22.5 11.25 20.7202 11.25 19.125C11.25 17.5297 14.022 15.75 18 15.75C21.978 15.75 24.75 17.5297 24.75 19.125C24.75 20.7202 21.978 22.5 18 22.5ZM33.75 16.875C33.75 18.4702 30.978 20.25 27 20.25V19.125C27 16.461 24.1672 14.3033 20.25 13.6912V11.5988C21.888 12.762 24.2708 13.5 27 13.5C29.7292 13.5 32.112 12.762 33.75 11.5988V16.875ZM27 11.25C23.022 11.25 20.25 9.47025 20.25 7.875C20.25 6.27975 23.022 4.5 27 4.5C30.978 4.5 33.75 6.27975 33.75 7.875C33.75 9.47025 30.978 11.25 27 11.25Z" fill="white" />
                  <path d="M9.04543 6.75H9.02293C8.40193 6.75 7.90918 7.254 7.90918 7.875C7.90918 8.496 8.42443 9 9.04543 9C9.66643 9 10.1704 8.496 10.1704 7.875C10.1704 7.254 9.66643 6.75 9.04543 6.75Z" fill="white" />
                  <path d="M27.0454 6.75H27.0229C26.4019 6.75 25.9092 7.254 25.9092 7.875C25.9092 8.496 26.4244 9 27.0454 9C27.6664 9 28.1704 8.496 28.1704 7.875C28.1704 7.254 27.6664 6.75 27.0454 6.75Z" fill="white" />
                  <path d="M18.0454 18H18.0229C17.4019 18 16.9092 18.504 16.9092 19.125C16.9092 19.746 17.4244 20.25 18.0454 20.25C18.6664 20.25 19.1704 19.746 19.1704 19.125C19.1704 18.504 18.6664 18 18.0454 18Z" fill="white" />
                </svg>
              </div>
              сети
            </button>
            <div className='afterLinkLine'></div>
          </li>

          <li className='link-item'>
            <button className='item-link'>
              <div className='link-img'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                  <path d="M33.7523 24.9593C33.8153 19.404 31.0185 14.2402 26.2305 11.3152C24.6015 10.3207 22.8375 9.6795 21.0352 9.324C21.2467 8.883 21.375 8.39475 21.375 7.875C21.375 6.01425 19.8608 4.5 18 4.5C16.1392 4.5 14.625 6.01425 14.625 7.875C14.625 8.39475 14.7533 8.883 14.9648 9.324C13.1625 9.6795 11.3985 10.3185 9.7695 11.313C4.9815 14.238 2.18475 19.4017 2.24775 24.957C0.94275 25.425 0 26.6602 0 28.125C0 29.9858 1.51425 31.5 3.375 31.5H32.625C34.4857 31.5 36 29.9858 36 28.125C36 26.6602 35.0573 25.425 33.7523 24.9593ZM18 6.75C18.6187 6.75 19.125 7.25625 19.125 7.875C19.125 8.4825 18.639 8.973 18.036 8.99325C18.0112 8.99325 17.9865 8.99325 17.964 8.99325C17.361 8.973 16.875 8.4825 16.875 7.875C16.875 7.25625 17.3813 6.75 18 6.75ZM10.9417 13.2345C13.1017 11.916 15.5205 11.2545 17.9415 11.2455C17.9618 11.2433 17.9797 11.25 18 11.25C18.0203 11.25 18.0382 11.2455 18.0585 11.2433C20.4795 11.2545 22.8982 11.9138 25.056 13.2323C29.1105 15.7095 31.5 20.0565 31.5068 24.75H4.49325C4.5 20.0565 6.8895 15.7095 10.9417 13.2345ZM32.625 29.25H3.375C2.75625 29.25 2.25 28.7437 2.25 28.125C2.25 27.5063 2.75625 27 3.375 27H32.625C33.2438 27 33.75 27.5063 33.75 28.125C33.75 28.7437 33.2438 29.25 32.625 29.25Z" fill="white" />
                  <path d="M26.3767 17.2418C24.2437 14.8635 21.1927 13.5 18 13.5C17.379 13.5 16.875 14.004 16.875 14.625C16.875 15.246 17.379 15.75 18 15.75C20.5538 15.75 22.9973 16.8413 24.7028 18.7448C24.9255 18.9923 25.2315 19.1182 25.5397 19.1182C25.8075 19.1182 26.0753 19.0238 26.2913 18.8303C26.7525 18.414 26.793 17.7053 26.3767 17.2418Z" fill="white" />
                </svg>
              </div>
              другі страви
            </button>
            <div className='afterLinkLine'></div>
          </li>

          <li className='link-item'>
            <button className='item-link'>
              <div className='link-img'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 22 23" fill="none">
                  <g clipPath="url(#clip0)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.8548 9.90038L21.3859 12.2285C21.674 12.4184 21.7536 12.8061 21.5635 13.0942C21.3747 13.3805 20.9878 13.4632 20.6977 13.272L17.7589 11.3343L16.6212 21.6107C16.5863 21.9267 16.3174 22.1668 16.0002 22.1668H6.00032C5.99855 22.1668 5.99674 22.1667 5.99491 22.1666C5.99304 22.1665 5.99114 22.1663 5.98925 22.1663C5.67268 22.1608 5.41341 21.9209 5.37906 21.6107L4.24137 11.3343L1.30257 13.2721C1.01367 13.4626 0.626134 13.3817 0.436844 13.0944C0.24674 12.8061 0.326329 12.4184 0.614578 12.2285L4.1455 9.90038C4.29882 8.5314 5.33951 7.42675 6.67773 7.17789C6.94742 5.72721 8.22249 4.62532 9.75016 4.62532H11.1686L11.6313 1.37076C11.68 1.02896 11.9967 0.791335 12.3382 0.84C12.6798 0.888503 12.9175 1.20491 12.869 1.54671L12.4305 4.63118C13.1994 4.67512 13.8945 4.99837 14.4162 5.50081L15.4069 2.51204C15.5155 2.1844 15.8693 2.00699 16.1968 2.11555C16.5244 2.22411 16.702 2.57779 16.5934 2.90543L15.2629 6.91943C15.2863 7.00422 15.3063 7.09032 15.3226 7.17789C16.661 7.42675 17.7015 8.5314 17.8548 9.90038ZM13.942 18.5999L15.5221 20.18L16.1777 14.2572L16.6668 10.8334H11.0002H5.3335L5.82278 14.2583L6.47835 20.18L8.05826 18.5999C8.17545 18.4827 8.33447 18.417 8.50016 18.417H13.5002C13.6658 18.417 13.8249 18.4827 13.942 18.5999ZM7.50911 20.917H14.4912L13.2412 19.667H8.75911L7.50911 20.917ZM14.3657 9.62532H16.5181C16.2632 8.90673 15.5819 8.3885 14.7799 8.37597L14.3657 9.62532ZM13.0488 9.62532L13.9398 6.93782C13.6369 6.31054 12.9949 5.87678 12.2534 5.87548L11.7204 9.62532H13.0488ZM8.50016 8.37532H7.25016C6.43538 8.37532 5.74023 8.89778 5.48225 9.62532H10.4578L10.9909 5.87532H9.75016C8.93538 5.87532 8.24072 6.39794 7.98274 7.12532H8.50016C8.84537 7.12532 9.12516 7.4051 9.12516 7.75032C9.12516 8.09553 8.84537 8.37532 8.50016 8.37532Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="21.3333" height="21.3333" fill="white" transform="translate(0.333496 0.833344)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              wok
            </button>
            <div className='afterLinkLine'></div>
          </li>

          <li className='link-item'>
            <button className='item-link'>
              <div className='link-img'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                  <path d="M34.875 7.875C35.496 7.875 36 7.371 36 6.75C36 6.129 35.496 5.625 34.875 5.625H18V3.375H34.875C35.496 3.375 36 2.871 36 2.25C36 1.629 35.496 1.125 34.875 1.125H7.875C7.254 1.125 6.75 1.629 6.75 2.25V14.625H1.125C0.504 14.625 0 15.129 0 15.75C0 22.6395 4.4865 28.8293 11.25 31.3943V33.75C11.25 34.371 11.754 34.875 12.375 34.875H23.625C24.246 34.875 24.75 34.371 24.75 33.75V31.3943C31.5135 28.8293 36 22.6373 36 15.75C36 15.129 35.496 14.625 34.875 14.625H18V7.875H34.875ZM13.5 3.375H15.75V5.625H13.5V3.375ZM13.5 7.875H15.75V14.625H13.5V7.875ZM9 3.375H11.25V5.625H9V3.375ZM9 7.875H11.25V14.625H9V7.875ZM33.705 16.875C33.228 22.59 29.1555 27.5895 23.274 29.5312C22.8127 29.682 22.5 30.114 22.5 30.6V32.625H13.5V30.6C13.5 30.114 13.1873 29.6842 12.726 29.5312C6.8445 27.5895 2.772 22.59 2.29725 16.875H33.705Z" fill="white" />
                </svg>
              </div>
              супи
            </button>
            <div className='afterLinkLine'></div>
          </li>

          <li className='link-item'>
            <button className='item-link'>
              <div className='link-img'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                  <path d="M34.875 14.625H33.3563C33.6082 13.905 33.75 13.1445 33.75 12.375C33.75 8.838 31.0163 5.92875 27.5513 5.6475C26.2665 4.19625 24.4552 3.375 22.5 3.375C20.5448 3.375 18.7335 4.19625 17.4487 5.6475C15.93 5.77125 14.5688 6.41925 13.5 7.3845V2.25C13.5 1.629 12.996 1.125 12.375 1.125C9.08775 1.125 6.20325 3.20175 5.058 6.1515C5.0445 6.1515 5.031 6.1425 5.0175 6.1425C4.6755 6.1965 4.43025 6.264 4.21875 6.47775C2.03175 8.685 1.7055 12.0443 3.186 14.625H1.125C0.504 14.625 0 15.129 0 15.75C0 22.6395 4.48875 28.8293 11.25 31.3943V33.75C11.25 34.371 11.754 34.875 12.375 34.875H23.625C24.246 34.875 24.75 34.371 24.75 33.75V31.3943C31.5112 28.8293 36 22.6373 36 15.75C36 15.129 35.496 14.625 34.875 14.625ZM18 7.875C18.3533 7.875 18.6863 7.71075 18.8978 7.42725C20.6235 5.13675 24.3765 5.13675 26.1 7.42725C26.3138 7.71075 26.6467 7.875 27 7.875C29.4818 7.875 31.5 9.89325 31.5 12.375C31.5 13.1783 31.2367 13.9432 30.8363 14.625H25.875L27.675 13.275C28.1723 12.9015 28.2735 12.1972 27.9 11.7C27.5265 11.2027 26.8223 11.097 26.325 11.4727L23.625 13.4978V11.2478C23.625 10.629 23.121 10.125 22.5 10.125C21.879 10.125 21.375 10.629 21.375 11.25V13.5L18.675 11.475C18.1777 11.1038 17.4735 11.205 17.1 11.7C16.7265 12.1972 16.8277 12.9015 17.325 13.275L19.125 14.625H14.1637C13.7633 13.9432 13.5 13.1783 13.5 12.375C13.5 9.89325 15.5182 7.875 18 7.875ZM11.25 3.48975V11.9093L6.948 7.60725C7.4655 5.526 9.1575 3.9195 11.25 3.48975ZM5.12325 8.964L10.7843 14.625H6.0345C5.9625 14.5642 5.88825 14.5125 5.81625 14.4405C4.34925 12.9578 4.1175 10.6943 5.12325 8.964ZM23.2718 29.5312C22.8128 29.682 22.5 30.114 22.5 30.6V32.625H13.5V30.6C13.5 30.114 13.1873 29.6842 12.7283 29.5312C6.8445 27.5895 2.772 22.59 2.29725 16.875H33.7028C33.228 22.59 29.1555 27.5895 23.2718 29.5312Z" fill="white" />
                </svg>
              </div>
              салати
            </button>
            <div className='afterLinkLine'></div>
          </li>

          <li className='link-item'>
            <button className='item-link'>
              <div className='link-img'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                  <path d="M25.4531 1H6.46875V2.05469C6.46875 4.87942 7.46578 7.43071 9.12382 9.4375H0V10.4922C0 16.9294 5.35662 22.0938 11.7422 22.0938H15.705C17.5908 22.0938 19.125 23.628 19.125 25.5138C19.125 26.1429 18.9562 26.7461 18.6401 27.2717C17.8036 25.4623 15.9724 24.2031 13.8516 24.2031H10.6875V25.2578C10.6875 26.981 11.5185 28.5136 12.8005 29.4766C11.5185 30.4395 10.6875 31.9721 10.6875 33.6953V34.75H13.8516C16.3982 34.75 18.5289 32.9354 19.0189 30.5312H19.125C24.5128 30.5312 28.9693 26.4701 29.5959 21.2484C33.4534 19.601 36 15.7858 36 11.5469C36 5.73133 31.2687 1 25.4531 1ZM13.8516 32.6406H12.9776C13.4129 31.4129 14.5859 30.5242 15.9609 30.5242H16.8349C16.3996 31.7519 15.2266 32.6406 13.8516 32.6406ZM15.9609 28.4219C14.5859 28.4219 13.4129 27.5402 12.9776 26.3125H13.8516C15.2266 26.3125 16.3996 27.1941 16.8349 28.4219H15.9609ZM8.63529 3.10938H17.0156C19.3418 3.10938 21.2344 5.00191 21.2344 7.32812C21.2344 8.11267 21.0138 8.88034 20.6062 9.54198C20.122 9.47364 19.6277 9.4375 19.125 9.4375H12.1044C10.1345 7.84703 8.90663 5.5957 8.63529 3.10938ZM11.1023 19.9632C6.44393 19.6607 2.6794 16.0804 2.16844 11.5469H10.6875C13.0137 11.5469 14.9062 13.4394 14.9062 15.7656C14.9062 17.9238 13.2405 19.7544 11.1023 19.9632ZM15.705 19.9844H15.4021C16.4426 18.8225 17.0156 17.3292 17.0156 15.7656C17.0156 14.1463 16.4039 12.6673 15.3998 11.5469H19.125C20.2062 11.5469 21.2404 11.7516 22.1913 12.1238C22.9461 13.1922 23.3438 14.4453 23.3438 15.7656C23.3438 18.3076 21.8495 20.5588 19.5645 21.5594C18.5673 20.5859 17.2054 19.9844 15.705 19.9844ZM20.4756 28.3139C20.8828 27.6228 21.1332 26.8504 21.2093 26.041C21.8999 26.2213 22.6133 26.3125 23.3438 26.3125C23.8539 26.3125 24.3561 26.2664 24.8475 26.1787C23.6559 27.2803 22.1473 28.0437 20.4756 28.3139ZM26.9852 23.051C25.9169 23.8055 24.6639 24.2031 23.3438 24.2031C22.5058 24.2031 21.6984 24.0435 20.9372 23.7294C20.8897 23.5905 20.8375 23.4538 20.7795 23.3201C21.9634 22.7316 22.9913 21.8723 23.7946 20.7901C24.8797 19.3282 25.4531 17.5908 25.4531 15.7656C25.4531 15.2555 25.4071 14.7533 25.3193 14.2619C26.7107 15.7669 27.5625 17.7779 27.5625 19.9844C27.5625 21.0657 27.3575 22.1 26.9852 23.051ZM26.7234 12.6777C25.6153 11.5259 24.2488 10.6244 22.718 10.0681C23.1257 9.21848 23.3438 8.28163 23.3438 7.32812C23.3438 5.70876 22.732 4.2298 21.728 3.10938H25.4531C26.5343 3.10938 27.5685 3.31405 28.5195 3.68629C29.2742 4.75469 29.6719 6.0078 29.6719 7.32812C29.6719 9.50331 28.5357 11.5275 26.7234 12.6777ZM29.615 18.8873C29.5793 18.5437 29.5272 18.205 29.4593 17.872C29.5301 17.8737 29.601 17.875 29.6719 17.875C30.184 17.875 30.6883 17.8285 31.1816 17.7401C30.7091 18.178 30.1845 18.564 29.615 18.8873ZM29.6719 15.7656C29.3666 15.7656 29.0621 15.7437 28.7618 15.7006C28.5513 15.2289 28.3072 14.7754 28.0325 14.3431C28.9872 13.7045 29.8058 12.8759 30.4354 11.9013C31.3159 10.5385 31.7812 8.95712 31.7812 7.32812C31.7812 6.81801 31.7352 6.31577 31.6474 5.82435C33.0389 7.32946 33.8906 9.3404 33.8906 11.5469C33.8906 12.6184 33.6859 13.6556 33.3103 14.6155C32.2427 15.3687 30.9908 15.7656 29.6719 15.7656Z" fill="white" />
                  <path d="M8.57812 13.6562H6.46875V15.7656H8.57812V13.6562Z" fill="white" />
                  <path d="M14.9062 5.21875H12.7969V7.32812H14.9062V5.21875Z" fill="white" />
                </svg>
              </div>
              закуски
            </button>
            <div className='afterLinkLine'></div>
          </li>

          <li className='link-item'>
            <button className='item-link'>
              <div className='link-img'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.09351 8.86963C5.70519 8.86963 5.39038 9.18444 5.39038 9.57275V19.922C5.39038 20.3103 5.70519 20.6251 6.09351 20.6251C6.48182 20.6251 6.79663 20.3103 6.79663 19.922V9.57275C6.79663 9.18444 6.48182 8.86963 6.09351 8.86963Z" fill="white" />
                  <path d="M9.46875 8.86963C9.08044 8.86963 8.76562 9.18444 8.76562 9.57275V19.922C8.76562 20.3103 9.08044 20.6251 9.46875 20.6251C9.85706 20.6251 10.1719 20.3103 10.1719 19.922V9.57275C10.1719 9.18444 9.85706 8.86963 9.46875 8.86963Z" fill="white" />
                  <path d="M12.8438 8.86963C12.4554 8.86963 12.1406 9.18444 12.1406 9.57275V19.922C12.1406 20.3103 12.4554 20.6251 12.8438 20.6251C13.2321 20.6251 13.5469 20.3103 13.5469 19.922V9.57275C13.5469 9.18444 13.2321 8.86963 12.8438 8.86963Z" fill="white" />
                  <path d="M19.8194 5.71847H16.2188H15.9471C15.9595 5.61037 15.9661 5.50148 15.9661 5.39241C15.9661 3.80662 14.6759 2.51644 13.0901 2.51644H12.611C12.2893 1.07817 11.0025 0 9.4686 0C8.54061 0 7.66471 0.400219 7.05721 1.08684C6.10312 1.14755 5.28065 1.7782 4.95922 2.6572C3.79799 3.03619 2.97121 4.13766 2.97121 5.39245C2.97121 5.50158 2.97777 5.61042 2.99015 5.71852H2.71851C2.33019 5.71852 2.01538 6.03333 2.01538 6.42164V21.3867C2.01538 22.8277 3.18768 24 4.62866 24H14.3086C15.7495 24 16.9219 22.8277 16.9219 21.3867V17.2499H19.8193C21.0132 17.2499 21.9844 16.2786 21.9844 15.0848V7.88353C21.9844 6.68972 21.0132 5.71847 19.8194 5.71847ZM4.37746 5.39241C4.37746 4.66687 4.91793 4.04175 5.6346 3.93825C5.94468 3.89348 6.18772 3.64898 6.23062 3.33862C6.2976 2.85384 6.71797 2.48827 7.20838 2.48827C7.24344 2.48827 7.28015 2.49033 7.31751 2.49445C7.57476 2.52244 7.82671 2.40722 7.97338 2.19394C8.31271 1.70072 8.8716 1.40625 9.4686 1.40625C10.4685 1.40625 11.282 2.21972 11.282 3.21961C11.282 3.60792 11.5968 3.92273 11.9851 3.92273H13.09C13.9004 3.92273 14.5597 4.58203 14.5597 5.39245C14.5597 5.50388 14.5477 5.61272 14.5238 5.71852H4.41341C4.38951 5.61272 4.37746 5.50383 4.37746 5.39241ZM15.5156 21.3867C15.5156 22.0522 14.9741 22.5938 14.3086 22.5938H4.62866C3.96308 22.5938 3.42163 22.0522 3.42163 21.3867V7.12472H15.5156V16.5467V21.3867ZM20.5782 15.0848C20.5782 15.5033 20.2378 15.8437 19.8193 15.8437H16.9219V7.12472H19.8193C20.2378 7.12472 20.5782 7.46513 20.5782 7.88353V15.0848Z" fill="white" />
                </svg>
              </div>
              напої
            </button>
            <div className='afterLinkLine'></div>
          </li>

          <li className='link-item'>
            <button className='item-link'>
              <div className='link-img'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36" fill="none">
                  <g clipPath="url(clip0)">
                    <path d="M36 17.9991C36 16.2779 35.2957 14.7366 34.1707 13.9829L34.1685 13.9806L18.6278 3.56314C18.6075 3.54964 18.5827 3.54739 18.5602 3.53614C18.4927 3.49789 18.4252 3.47539 18.3532 3.45289C18.2835 3.43039 18.216 3.40564 18.144 3.39664C18.0765 3.38764 18.0112 3.39439 17.9438 3.39664C17.8673 3.40114 17.793 3.40339 17.7188 3.42139C17.6558 3.43714 17.5972 3.46639 17.5365 3.49564C17.4622 3.52939 17.3925 3.56314 17.3273 3.61039C17.3115 3.62389 17.289 3.62839 17.271 3.64414L16.3485 4.43164C15.876 4.83439 15.8175 5.54539 16.2225 6.01789C16.4452 6.27889 16.7603 6.41164 17.0775 6.41164C17.3363 6.41164 17.595 6.32164 17.8065 6.14164L18.081 5.90764L29.9565 13.8681L4.761 17.4681L7.66575 14.9594C8.136 14.5521 8.1855 13.8411 7.7805 13.3709C7.37325 12.8984 6.6645 12.8534 6.19425 13.2561L0.38925 18.2736C0.369 18.2894 0.36225 18.3141 0.34425 18.3299C0.2835 18.3906 0.234 18.4581 0.189 18.5324C0.1575 18.5819 0.12375 18.6246 0.10125 18.6764C0.06975 18.7484 0.05625 18.8271 0.0405 18.9059C0.027 18.9666 0.009 19.0206 0.00675 19.0814C0.00675 19.0971 0 19.1084 0 19.1241V25.8741V32.6241C0 32.9504 0.14175 33.2609 0.38925 33.4746C0.594 33.6524 0.85725 33.7491 1.125 33.7491C1.17675 33.7491 1.23075 33.7469 1.2825 33.7379L32.7825 29.2379C32.7982 29.2356 32.8095 29.2266 32.8252 29.2221C34.6185 29.0849 36 27.1814 36 24.7491C36 23.3834 35.5568 22.1931 34.8592 21.3741C35.5568 20.5551 36 19.3649 36 17.9991ZM32.625 26.9991C32.598 26.9991 32.5755 27.0126 32.5485 27.0149C32.5215 27.0171 32.4945 27.0059 32.4675 27.0104L2.25 31.3259V26.8484L32.6452 22.5059C33.1042 22.5306 33.75 23.3946 33.75 24.7491C33.75 26.1216 33.084 26.9991 32.625 26.9991ZM32.625 20.2491C32.598 20.2491 32.5732 20.2626 32.5462 20.2649C32.5192 20.2671 32.4945 20.2559 32.4652 20.2604L2.25 24.5759V20.0984L32.6475 15.7581C32.733 15.7626 32.8185 15.7874 32.913 15.8526C33.318 16.1204 33.75 16.9079 33.75 17.9991C33.75 19.3716 33.084 20.2491 32.625 20.2491Z" fill="white" />
                    <path d="M13.5383 6.96965C13.473 5.48465 12.825 3.4664 10.629 2.3684C10.0732 2.0939 9.4005 2.31665 9.11925 2.87015C8.8425 3.4259 9.06525 4.10315 9.621 4.3799C10.9418 5.03915 11.241 6.1844 11.2883 6.94265C9.963 7.3994 9 8.6459 9 10.1241C9 11.9849 10.5142 13.4991 12.375 13.4991C14.2358 13.4991 15.75 11.9849 15.75 10.1241C15.75 8.6729 14.8253 7.4444 13.5383 6.96965ZM12.375 11.2491C11.7562 11.2491 11.25 10.7451 11.25 10.1241C11.25 9.50315 11.7562 8.99915 12.375 8.99915C12.9938 8.99915 13.5 9.50315 13.5 10.1241C13.5 10.7451 12.9938 11.2491 12.375 11.2491Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              десерти
            </button>
            <div className='afterLinkLine'></div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header