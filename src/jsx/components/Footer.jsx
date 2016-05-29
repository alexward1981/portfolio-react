import React from 'react';
import Navigation from './nav.jsx'
import { connect } from 'react-redux';
import { languagesLoad } from '../../scripts/actions';

export default class Footer extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(languagesLoad());
  }

  render() {
    const { languages } = this.props
    if(languages.isFetching) {
      return(
        <section class="loader">
          <span>Content is loading...</span>
        </section>
      )
    } else {
      if(languages.items.definitions) {
        return(
          <footer class="c-global-footer">
            <div class="wrapper">
              <Navigation postion="footer" />
              <div class="c-global-footer_copyright">
                { languages.items.definitions.copyright }
              </div>
            </div>
          </footer>
        )
      } else {
        return(
          <section class="loader">
            <span>Content is loading...</span>
          </section>
        )
      }
    }
  }
}

function select(state) {
  const { languages } = state;
  return {
    languages
  };
}

export default connect(select)(Footer);
