import React, {Component, PropTypes} from 'react';


class Cart extends Component {

  render() {
      return (
            <div className="cartContainer">
              <div className="cartInner">
                <span className="cartTextSpan">Cart<i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
              </div>
            </div>
      )
  }
}
export default Cart;