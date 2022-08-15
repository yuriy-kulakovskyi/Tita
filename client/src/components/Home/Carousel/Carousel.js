import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./Carousel.css";

import bannerPhoto from "../img/banner.png";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings}>
          <div className="banner_wrap">
            <img src={bannerPhoto} alt="Banner" />
          </div>
          <div className="banner_wrap"></div>
          <div className="banner_wrap"></div>
          <div className="banner_wrap"></div>
        </Slider>
      </div>
    );
  }
}