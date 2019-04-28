import React, {Component, PropTypes} from 'react';

import MainLogo from './NavHeader/MainLogo';
import TextField from './NavHeader/TextField';
import RightNavHeader from './NavHeader/RightNavHeader';


class Nav extends Component {
	render() {
      return (
    <div className="navheader" id="navheader">
      <div className="bot-header">
        <div className="container">

          <MainLogo />

          <TextField />

          <RightNavHeader />


        </div>
      </div>
    </div>   
	
			   
			   )
		}
	
	}
	
export default Nav;






