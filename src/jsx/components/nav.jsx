import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { navLoad } from '../../scripts/actions';

export class Navigation extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(navLoad());
  }

  render() {
    const navigation = this.props.nav;
    const navitems = navigation && navigation.items ? navigation.items.asMutable().map((item) => {
      if(item.inNav === this.props.position || item.inNav === 'both') {
        return <li key={item._id}><Link to={item.slug}>{item.name}</Link></li>
      }
    }) : null;
    if(navigation.isFetching) {
      return(
        <section class="loader">
          <span>Content is loading...</span>
        </section>
      )
    } else {
      if (this.props.position === 'header') {
        return(
          <nav class="c-global-nav">
            <span class="c-global-nav_toggle"><div>Menu</div></span>
            <ul>
              { navitems }
            </ul>
          </nav>
        )
      } else {
        return (
          <nav class="c-global-footer-nav">
            <ul>
              { navitems }
            </ul>
          </nav>
        )
      }
    }
  }
}

function select(state) {
  const { nav } = state;
  return {
    nav
  };
}

export default connect(select)(Navigation);
