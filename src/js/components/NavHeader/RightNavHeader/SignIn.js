import React, {Component, PropTypes} from 'react';


class SignIn extends Component {

  render() {
      return (
         <div className="accountTab">
              <div className="accountInner">
                <span className="accountNameText">Sign In <i className="fa fa-user" aria-hidden="true"></i></span>
                
              <div className="dropdownWrapper hard-hidden">
                <div className="dropdownAccount ">
                  <div className="accountList">
                    <ul>
                      <li><a href="#your-account"><i className="fa fa-user-o" aria-hidden="true"></i>Your Account</a></li>
                      <li><a href="#your-order"> <i className="fa fa-cube" aria-hidden="true"></i>Your Orders</a></li>
                      <li><a href="#shortlist"> <i className="fa fa-heart-o" aria-hidden="true"></i>Shortlist</a></li>
                      <li><a href="#Sd-cash"> <i className="fa fa-handshake-o" aria-hidden="true"></i>SD Cash</a></li>
                    </ul>
                  </div>
                  <div className="accountInfoLoggedIn">
                    <p className="newUser"><span>If you are a new user</span></p>
                    <span className="accountBtn btn">
                      <a href="#login">login</a>
                    </span>
                  </div>
                  <span className="newUserRegister">Register</span>
                </div>
              </div>
              </div>
            </div> 
      )
  }
}
export default SignIn;