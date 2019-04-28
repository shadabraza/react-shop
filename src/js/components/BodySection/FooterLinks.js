import React, {Component, PropTypes} from 'react';

class FooterLinks extends Component {
	render() {
      return (
   
	   <div className="content-footer footerStyle">
      <div className="container">
        <div className="middel-top">
          <div className="inner-footer">
            <div className="smallSection">
             <div className="middel-heading">Policy Info</div>
              <ul className="middel-content">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Sale</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Report Abuse & Takedown Policy</a></li>
              </ul>
            </div>
            <div className="smallSection">
              <div className="middel-heading">Company</div>
              <ul className="middel-content">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Core Values</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
            <div className="smallSection">
              <div className="middel-heading">Snapdeal Business</div>
              <ul className="middel-content">
                <li><a href="#">Shopping App</a></li>
                <li><a href="#">Sell on Snapdeal</a></li>
                <li><a href="#">Advertise on Snapdeal</a></li>
                <li><a href="#">Media Enquiries</a></li>
                <li><a href="#">Be an Affiliate</a></li>
              </ul>
            </div>

            <div className="xsmallsection">
              <div className="middel-heading">Need help?</div>
              <ul className="middel-content">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">online Shopping</a></li>
              </ul>
            </div>
           
            <div className="lgSection">
              <div className="middel-heading">Subscribe</div>
              <input type="text" name="keyword" className="subscribeInputBox" placeholder="Your email address" />
              <button className="subscribeBtn"> Subscribe</button>
              <div className="sucessfulSubscribe hidden">Succesfully Subscribed</div>
              <div className="errorSubscribe hidden">Something went wrong. please try again!</div>
              <div className="errorSubscribeEmail hidden">Please enter a valid email address</div>
              <p className="registerSubscribeText">Register now to get updates on promotion and</p>
              <p className="registerSubscribeText1">Coupons.</p>
              <span><a href="#">Or Download App</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
			   
			   )
		}
	
	}
	
export default FooterLinks;






