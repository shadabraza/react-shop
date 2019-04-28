import React, {Component, PropTypes} from 'react';
import VerticalMenu from './VerticalMenu';
import Barcode from './Barcode';
import TopSlider from './Slider';
import RightCard from './RightCard';
import MobileAccessories from './MobileAccessories';


class FirstViewPort extends Component {
	render() {
      return (
   
            <div className="first-viewport">
              
              <VerticalMenu />

              <Barcode />

              <TopSlider />

              <RightCard />

              <MobileAccessories />  
               
            </div>
			   
			   )
		}
	
	}
	
export default FirstViewPort;






