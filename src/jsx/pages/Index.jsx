import React from 'react';
import DocumentMeta from 'react-document-meta';
import { Link } from 'react-router';

import * as PagesActions from '../../../actions/pagesActions';
import PagesStore from '../../../stores/pagesStore';

export default class Index extends React.Component {
  constructor(props) {
    super();
    this.state = {
      pages: PagesStore.getAll()
    }
  }

  componentWillMount() {
    PagesActions.loadPages('home');
    PagesStore.on("change", () => {
      this.setState({
        pages: PagesStore.getAll()
      })
    })
  }

  render() {
    console.log(this.props.status)
    const { pages } = this.state;
    const meta = {
      title: pages.title,
      description: pages.description,
      canonical: pages.canonical,
    }
    return(
      <section class="page-login">
        <DocumentMeta {...meta} />
        <h1>Welcome!</h1>
      </section>
    )
  }
}
