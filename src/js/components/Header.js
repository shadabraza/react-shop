import React, {Component, PropTypes} from 'react';

import LeftHeader from './header/LeftHeader';
import RightHeader from './header/RightHeader';
import Nav from './NavHeader';
import BodySec from './BodySection';


class Header extends Component {

  render() {
    return (
<div>       
<div id="top-header">
  <div id="top-header">
    <div className="top-header">
      <div className="container">
        <LeftHeader />
        <RightHeader />
      </div>
    </div>
  </div>
</div>

<Nav />

<BodySec />
</div>  
      )
  }
}
export default Header;