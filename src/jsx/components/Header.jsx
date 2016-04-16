import React from 'react';
import { Link } from 'react-router';

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
        <div class="wrapper">
          <a href="/" class="logo">
            <img src="/static/images/gov.uk_logotype_crown.png" alt="Logo" />
          </a>
          <div class="col">
            <h1>Alex Ward Portfolio</h1>
          </div>
        </div>
      </header>
    )
  }
}
