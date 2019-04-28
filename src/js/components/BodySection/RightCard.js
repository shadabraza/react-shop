import React, {Component, PropTypes} from 'react';

class RightCard extends Component {
	render() {
      return (
   
	       <div className= "right-cards-wp">
        <div className= "right-cards">
          <div id="content">
            <div id="01-card">
              <img src="./public/images/cards/hobby-store.jpg" alt="Card" className="hobby-store" />
              <div className= "btn-wp">
                <span className= "bttext spanbtn">
                  <a href="#" style={{color:'#ffffff'}}>View Details</a>
                </span>
                <span className= "bttext spanbtn0">
                  <a href="#02-card" style={{color:'#666'}}>Next</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className= "right-cards">
          <div id="content">
            <div id="02-card">
              <img src="./public/images/cards/snapdeal gift cards offers.jpg" alt="Card" className="hobby-store" />
              <div className= "btn-wp">
                <span className= "bttext spanbtn">
                  <a href="#" style={{color:'#ffffff'}}>View Details</a>
                </span>
                <span className= "bttext spanbtn0">
                  <a href="#03-card" style={{color:'#666'}}>Next</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className= "right-cards">
          <div id="content">
            <div id="03-card">
              <img src="./public/images/cards/1474400474.jpg" alt="Card" className="hobby-store" />
              <div className= "btn-wp">
                <span className= "bttext spanbtn">
                  <a href="#" style={{color:'#ffffff'}}>View Details</a>
                </span>
                <span className= "bttext spanbtn0">
                  <a href="#01-card" style={{color:'#666'}}>Next</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
			   
			   )
		}
	
	}
	
export default RightCard;






