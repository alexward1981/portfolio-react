import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { connect } from 'react-redux';
import { configLoad, pagesLoad } from '../../scripts/actions';
import PageContent from '../components/PageContent.jsx';
import Availability from '../components/Availability.jsx';

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
    const status = configItems.status;
    const meta = {
      title: '[' + status + '] ' + pagesItems.title,
      description: pagesItems.description,
      canonical: pagesItems.canonical,
    }

    var sectionClasses = 'c-landing-page ' + status;
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
          <PageContent pageName="home" cssclass="c-landing-page_content"/>
          <div class="c-landing-page_backdrop"><div></div></div>
          <Availability status={status} cssclass="c-availability" />
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
