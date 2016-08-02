import React from 'react';
import Navigation from './nav.jsx';
import SocialLinks from './Header/socialLinks.jsx';

export default class Header extends React.Component {

  render() {
    return(
      <header role="banner" class="c-global-header" onClick={this.props.onClick}> 
        <Navigation position="header" />
        <SocialLinks />
      </header>
    )
  }
}
