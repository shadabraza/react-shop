import React, {Component, PropTypes} from 'react';

class FooterIcons extends Component {
	render() {
      return (
   
	   <div className="bottom-foofer footerDiv" >
      <div className="container">
        <div className="bottom-content">
          <p>Payment</p>
          <div className="bottomfooterimg">
            <img src="./public/images/credit-cards.png" alt="banner" />
          </div>
        </div>
        <div className="bottom-content">
          <p>connect</p>
          <div className="bottomfooterimg">
            <a href="https://www.facebook.com/Snapdeal" target="_blank"><i className="fa fa-facebook" aria-hidden="true" ></i></a>
            <a href="https://twiter.com/Snapdeal" target="_blank"><i className="fa fa-twitter" aria-hidden="true" ></i></a>
            <a href="https://plus.google.com/+Snapdeal/posts" target="_black"><i className="fa fa-google-plus-official" aria-hidden="true" ></i></a>
            <a href="https://www.youtube.com/user/snapdeal" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true" ></i></a>
            <a href="https://instagram.com/user/?h1=en" target="_blank"><i className="fa fa-instagram" aria-hidden="true" ></i></a>
            <a href="https:www.pinterest.com/snapdeal/" target="_blank"><i className="fa fa-pinterest" aria-hidden="true" ></i></a>
          </div>
        </div>
      </div>
    </div>
			   
			   )
		}
	
	}
	
export default FooterIcons;






