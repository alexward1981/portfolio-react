import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { navLoad } from '../../../scripts/actions';

export default class FooterNav extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(navLoad());
  }

  render() {
    const { nav, isFetching } = this.props;
    const navitems = nav.items.asMutable().map((item) => {
      if(item.inNav === 'header') {
        return <li key={item._id}><Link to={item.slug}>{item.name}</Link></li>
      }
    });
    if(isFetching) {
      return(
        <section class="loader">
          <span>Content is loading...</span>
        </section>
      )
    } else {
      return(
        <nav class="c-primary-nav">
          <span class="c-primary-nav_toggle">Menu</span>
          <ul>
            { navitems }
          </ul>
        </nav>
      )
    }
  }
}

function select(state) {
  const { nav } = state;
  return {
    nav
  };
}

export default connect(select)(FooterNav);
