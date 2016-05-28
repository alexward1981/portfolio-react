import React from 'react';
import { connect } from 'react-redux';
import { pageContentLoad } from '../../scripts/actions';

export default class PageContent extends React.Component {
  componentWillMount() {
    const pageName = this.props.pageName;
    const { dispatch } = this.props;
    dispatch(pageContentLoad(pageName));
  }

  render() {
    const { pageContent, isFetching } = this.props
    const content = pageContent.items;

    return(
      <div>
        <h1>{content.title}</h1>
        <h2>{content.subtite}</h2>
        <div>
          {content.body}
        </div>
      </div>
    )
  }
}

function select(state) {
  const { config, pageContent } = state;
  return {
    config,
    pageContent
  };
}

export default connect(select)(PageContent);
