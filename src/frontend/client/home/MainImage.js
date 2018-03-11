import React, { Component } from 'react'
import Slider from 'react-slick'
import Main1 from "../shared/images/maincontents/shop_2.jpg";
import Main2 from '../shared/images/gift-special.jpg';
import Main3 from '../shared/images/sandwich-set.jpg';
import Main4 from '../shared/images/store-outside2.jpg';
import Main5 from '../shared/images/maincontents/P1010320.JPG';


import "../styles/App.css";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return <div><img src={`Main${i+1}`}/></div>
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      // fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div><img className="MainImage" src={Main1}/></div>
          <div><img className="MainImage"  src={Main2} /></div>
          <div><img className="MainImage"  src={Main3} /></div>
          <div><img className="MainImage"  src={Main5} /></div>
          <div><img className="MainImage"  src={Main4} /></div>
        </Slider>
      </div>
    );
  }
}
