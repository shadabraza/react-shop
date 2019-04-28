import React, {Component, PropTypes} from 'react';


class RightHeader extends Component {

  render() {
      return (
    <div className="rt-wp">
        <ul className="top-hooks">
           <li><a href="#gift-cart">Gift Cards</a></li>
           <li><a href="#donate-satationery"> Donate Satationery</a></li>
           <li><a href="#helf-center">Helf Center</a></li>
           <li><a href="#sell-on-snapdeal">Sell On Snapdeal</a></li>
           <li><a href="#download-app"><i className="fa fa-mobile" aria-hidden="true"></i>Download App</a></li>
        </ul>
    </div>
      )
  }
}
export default RightHeader;