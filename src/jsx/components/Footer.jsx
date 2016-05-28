import React from 'react';
import Navigation from './nav.jsx'

export default class Footer extends React.Component {
  render() {
    return(
      <footer class="c-global-footer">
        <div class="wrapper">
          <Navigation postion="footer" />
          <div class="c-global-footer_copyright">
            <a href="/">
              Copyright 2016
            </a>
          </div>
        </div>
      </footer>
    )
  }
}
