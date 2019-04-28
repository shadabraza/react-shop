import React, {Component, PropTypes} from 'react';

class TopSlider extends Component {
	render() {
      return (
        
        <div className= "main-Slider">
        <div className= "slider-content">
          <div id="slider-box">
            <div id="pic1">
              <img src="./public/images/womanFashionWeb.jpg" alt="" />
              <a className= "previous" href="#pic7">&lt;</a>
              <a className= "next" href="#pic2">&gt;</a>
            </div>
            <div id="pic2">
              <img src="./public/images/web02.jpg" alt="" />
              <a className= "previous" href="#pic1">&lt;</a>
              <a className= "next" href="#pic3">&gt;</a>
            </div>
            <div id="pic3">
              <img src="./public/images/web03.jpg" alt="" />
              <a className= "previous" href="#pic2">&lt;</a>
              <a className= "next" href="#pic4">&gt;</a>
            </div>
            <div id="pic4">
              <img src="./public/images/web.jpg" alt="" />
              <a className= "previous" href="#pic3">&lt;</a>
              <a className= "next" href="#pic5">&gt;</a>
            </div>
            <div id="pic5">
              <img src="./public/images/sport.jpg" alt="" />
              <a className= "previous" href="#pic4">&lt;</a>
              <a className= "next" href="#pic6">&gt;</a>
            </div>
            <div id="pic6">
              <img src="./public/images/kidsFashionWeb.jpg" alt="" />
              <a className= "previous" href="#pic5">&lt;</a>
              <a className= "next" href="#pic7">&gt;</a>
            </div>
            <div id="pic7">
              <img src="./public/images/manFashionWeb.jpg" alt="" />
              <a className= "previous" href="#pic6">&lt;</a>
              <a className= "next" href="#pic1">&gt;</a>
            </div>
          </div>
        </div>
        <div className= "banner-item">Dhamaka Offers</div>
        <div className= "banner-item">Women's Fashion</div>
        <div className= "banner-item">Resolution Store</div>
        <div className= "banner-item">Pet Store</div>
        <div className= "banner-item">Smartphone</div>
      </div>
	      
			   
			   )
		}
	
	}
	
export default TopSlider;






