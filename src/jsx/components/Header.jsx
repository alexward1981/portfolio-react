import React from 'react';
import HeaderNav from './Header/nav.jsx';
import SocialLinks from './Header/socialLinks.jsx';

export default class Header extends React.Component {
  render() {
    return(
      <header class="c-global-header" role="banner">
        <HeaderNav />
        <SocialLinks />
      </header>
    )
  }
}
