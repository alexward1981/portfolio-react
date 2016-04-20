import React from 'react';
import FooterNav from './Footer/nav.jsx'

export default class Footer extends React.Component {
  render() {
    return(
      <footer class="c-global-footer">
        <div class="wrapper">
          <FooterNav />
          <div class="copyright">
            <a href="/">
              Copyright 2016
            </a>
          </div>
        </div>
      </footer>
    )
  }
}
