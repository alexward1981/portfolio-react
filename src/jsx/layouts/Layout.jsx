import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuVisible: false
    }
  }

  handleNavClick() {
    // Check if the menu is visible and then toggle to the other state
    if(!this.state.mobileMenuVisible) {
      this.setState({mobileMenuVisible: true});
    } else {
      this.setState({mobileMenuVisible: false});
    }
  }

  forceCloseNav(event) {
    event.stopPropagation();
    // Don't perform checks, just set the menu visibility to false
    this.setState({mobileMenuVisible: false});
  }

  render() {
    const { dispatch } = this.props;
    return(
      <div class={'main menu-open-'+ this.state.mobileMenuVisible} role="main">
        <span class="header-toggle" onClick={this.handleNavClick.bind(this)}><div><span>Menu</span></div></span>
				<Header onClick={this.forceCloseNav.bind(this)}/>
        <div class="wrapper">
	        { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}
