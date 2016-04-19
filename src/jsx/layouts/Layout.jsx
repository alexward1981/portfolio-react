import React from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default class Layout extends React.Component {
  render() {
    return(
      <div class="main" role="main">
				<Header />
        <div class="wrapper">
	        { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}
