import React from 'react';
import { Link } from 'react-router';
import SocialLinks from './Header/socialLinks.jsx';

import * as LangActions from '../../../actions/langActions';
import LangStore from '../../../stores/langStore';

export default class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      lang: LangStore.getAll()
    }
  }

  componentWillMount() {
    LangActions.loadLang();
    LangStore.on("change", () => {
      this.setState({
        lang: LangStore.getAll()
      })
    })

  }

  render() {
    const { lang } = this.state;
    return(
      <header class="c-global-header" role="banner">
        {/* Nav will go here */}
        <SocialLinks />
      </header>
    )
  }
}
