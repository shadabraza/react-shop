import React, {Component, PropTypes} from 'react';

class Barcode extends Component {
	render() {
      return (
   
	    <div className= "nav-bottom-barcode">
        <div className= "bar-code-img" >
          <img src="./public/images/bar-code.png" alt="Bar Code" />
        </div>
        <div className= "bar-code-info">
          <span className= "head">Enjoy Convenient Order Tracking</span>
          <span className= "desc">Scan to download app</span>
        </div>
      </div>
			   
			   )
		}
	
	}
	
export default Barcode;






