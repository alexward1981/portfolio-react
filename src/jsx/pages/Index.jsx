import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { connect } from 'react-redux';
import { configLoad, pagesLoad } from '../../scripts/actions';


export class Index extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(configLoad());
    dispatch(pagesLoad('home'));
  }

  render() {
    const { config, pages, isFetching } = this.props

    const configItems = config.items;
    const pagesItems = pages.items;
    const meta = {
      title: '[' + configItems.status + '] ' + pagesItems.title,
      description: pagesItems.description,
      canonical: pagesItems.canonical,
    }

    var sectionClasses = 'landing ' + configItems.status;
    if(isFetching) {
      return(
        <section class="loader">
          <span>Content is loading...</span>
        </section>
      )
    } else {
      return(
        <section class={ sectionClasses }>
          <DocumentMeta {...meta} />
          <h1>Welcome!</h1>
        </section>
      )
    }

  }
}

function select(state) {
  const { config, pages } = state;
  return {
    config,
    pages
  };
}

export default connect(select)(Index);
