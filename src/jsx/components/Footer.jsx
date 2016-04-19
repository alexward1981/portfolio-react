import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
  constructor(props) {
    super();
  }
  render() {
  //  const { lang } = this.state;
    return(
      <footer class="c-global-footer">
        <div class="wrapper">
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
