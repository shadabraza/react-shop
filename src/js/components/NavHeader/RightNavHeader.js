import React, {Component, PropTypes} from 'react';
import Cart from './RightNavHeader/Cart';
import SignIn from './RightNavHeader/SignIn';

class RightNavHeader extends Component {

  render() {
      return (
         <div className="rt-header">
            
            <Cart />

            <SignIn /> 

          </div> 
      )
  }
}
export default RightNavHeader;