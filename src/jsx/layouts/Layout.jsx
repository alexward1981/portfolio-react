import React from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHideNav : 'menu-closed'
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    var css = (this.state.showHideNav === "menu-closed") ? "menu-open" : "menu-closed";
    this.setState({"showHideNav":css});
  }

  render() {
    var navState = this.state.showHideNav;

    return(
      <div class={'main ' + navState} role="main">
        <span class="header-toggle" onClick={this.toggleNav.bind(this)}><div><span>Menu</span></div></span>
				<Header />
        <div class="wrapper">
	        { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}
