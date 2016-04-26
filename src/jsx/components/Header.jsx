import React from 'react';
import Navigation from './nav.jsx';
import SocialLinks from './Header/socialLinks.jsx';

export default class Header extends React.Component {
  render() {
    return(
      <header class="c-global-header" role="banner">
        <Navigation position="header" />
        <SocialLinks />
      </header>
    )
  }
}
