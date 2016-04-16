import React from 'react';
import { Link } from 'react-router';

import * as NavActions from '../../../../actions/navActions';
import NavStore from '../../../../stores/navStore';

export default class Nav extends React.Component {
  constructor(props) {
    super();
    this.state = {
      nav: NavStore.getAll()
    }
  }

  componentWillMount() {
    NavActions.loadNav();
    NavStore.on("change", () => {
      this.setState({
        nav: NavStore.getAll()
      })
    })
  }

  render() {
    const { nav } = this.state;
    const NavComponents = nav.map((navItem) => {
      if(navItem.position === 'footer') return <li key={navItem._id}><Link to={navItem.url}>{navItem.label}</Link></li>
    });

    return(
      <nav>
        <ul>
          { NavComponents }
        </ul>
      </nav>
    )
  }
}
