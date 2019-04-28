import React, {Component, PropTypes} from 'react';


class TextField extends Component {

  render() {
      return (
          <div className="search-wp">
            <div className="searchbox">
              <form>
                <input type="text"  className="searchformInput keyword" id="inputvalEnter" placeholder="Search products & brands" 
                autocomplete="off" name="keyword"/>
                <button className="searchformButton">
                  <span className="searchTextSpan"><i className="fa fa-search" aria-hidden="true"></i>Search</span>
                </button>
              </form>
            </div>
          </div>
      )
  }
}
export default TextField;