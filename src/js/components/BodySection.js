import React, {Component, PropTypes} from 'react';
import FirstViewPort from './BodySection/FirstViewPort';
import DownLoadSnapdeal from './BodySection/DownLoadSnapdeal';
import SecureSection from './BodySection/SecureSection';
import TradingProduct from './BodySection/TradingProduct';
import TodayDeal from './BodySection/TodayDeal';
import HtcSection from './BodySection/HtcSection';
import BestSeller from './BodySection/BestSeller';
import FooterLinks from './BodySection/FooterLinks';
import FooterIcons from './BodySection/FooterIcons';

class BodySec extends Component {
	render() {
      return (
   <div className="section" id="section" width = "100%">

   	<FirstViewPort />

   	<TradingProduct />

    <div className="bottom-banner container">
      <div className="fullWidthBanner" style={{backgroundImage: 'url(./public/images/stationery.jpg)'}}>
      </div>
    </div>


    <TodayDeal />

    <HtcSection />

    <BestSeller />
    
    <DownLoadSnapdeal />

    <SecureSection />

    <FooterLinks />

    <FooterIcons />

   </div>	
	
			   
			   )
		}
	
	}
	
export default BodySec;






