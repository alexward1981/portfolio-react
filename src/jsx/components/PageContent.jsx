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
        { content.title && <h1>{content.title}</h1> }
        { content.subtitle && <h2>{content.subtitle}</h2> }
        { content.minime && <img src={content.minime} alt={content.minimeAlt} /> }
        { content.body && <div> {content.body} </div> }
      </div>
    )
  }
}

function select(state) {
  const {  pageContent } = state;
  return {
    pageContent
  };
}

export default connect(select)(PageContent);
