import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { navLoad } from '../../../scripts/actions';

export default class HeaderNav extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(navLoad());
  }

  render() {
    const { nav } = this.props;
    const navitems = nav && nav.items ? nav.items.asMutable().map((item) => {
      if(item.inNav === 'header' || item.inNav === 'both') {
        return <li key={item._id}><Link to={item.slug}>{item.name}</Link></li>
      }
    }) : null;
    if(nav.isFetching) {
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

export default connect(select)(HeaderNav);
