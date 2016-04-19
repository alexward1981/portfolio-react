import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { connect } from 'react-redux';
import { configLoad } from '../../scripts/actions';


export default class Index extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(configLoad());
  }

  render() {
    const { config, isFetching } = this.props
    const meta = {
      title: 'pages.title',
      description: 'pages.description',
      canonical: 'pages.canonical',
    }

    var sectionClasses = 'landing ' + config.items.status;

    return(
      <section class={ sectionClasses }>
        <DocumentMeta {...meta} />
        <h1>Welcome!</h1>
      </section>
    )
  }
}

function select(state) {
  const { config } = state;
  return {
    config
  };
}

export default connect(select)(Index);
