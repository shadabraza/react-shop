import React, {Component, PropTypes} from 'react';

class HtcSection extends Component {
	render() {
      return (
   
	   <div className="firstprobanner clearfix">
      <div className="container">
        <div className="contain">
          <div className="divBanner">
            <a  href="#" className="superAnchar">
            <img src="./public/images/bannercornor.jpg" alt="banner" />
            </a>
          </div>
          <div className="proDivBanner">
            <div className="background-white">
              <div className="nonGradientDiv clearfix">
                <div className="pogDetails">
                  <div className="bestSell">Best Seller</div>
                  <div className="padB20 padT20 pogNameCarousl">Grandson Attractive Set of 3 Watches Combo for boys</div>
                  <div className="padT20 priceTxt">Rs 489</div>
                  <div className="btn-01 btn-theme-secondary shpNowSuperDeal marT30">SHOP NOW</div>
                </div>
                <div className="product-Image" >
                  <img src="./public/images/spotlight.jpg" alt="Image" />
                </div>
              </div>
              <div className="gradientDiv marT20  paddT30">
                <div className="widgetTimer gradTimer">
                  <ul className="timerVal">
                    <li><span className="hours timerData">12</span>:</li>
                    <li><span className="minutes timerData">09</span>:</li>
                    <li><span className="seconds timerData">10</span></li>
                  </ul>
                </div>
                <div className="marT20 timerMins">
                  <span>hrs</span>
                  <span className="sMa">min</span>
                  <span>sec</span>
                </div>
                <div className="marT30 padT30">In The Spotlight</div>
                <div className="dealDash"></div>
                <div className="greatDealsForYou">Great deals for you. Get what you like before the timer runs out!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
			   
			   )
		}
	
	}
	
export default HtcSection;






