import React from 'react';
import { Link } from 'react-router';

import * as LangActions from '../../../actions/langActions';
import LangStore from '../../../stores/langStore';

export default class Footer extends React.Component {
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
        <footer class="c-global-footer">
          <div class="wrapper">
            <div class="copyright">
              <a href="/">
                {lang.footerCopyright}
              </a>
            </div>
          </div>
        </footer>
      )
  }
}
