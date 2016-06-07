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
    const { pageContent } = this.props
    const content = pageContent.items;
    function getBodyCopy() { return {__html: content.body}; };

    return(
      <div class={this.props.cssclass}>
        { content.title && <h1>{content.title}</h1> }
        { content.subtitle && <h2>{content.subtitle}</h2> }
        { content.minime && <img src={content.minime} alt={content.minimeAlt} /> }
        { content.body && <div dangerouslySetInnerHTML={getBodyCopy()} /> }
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
