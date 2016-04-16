import React from 'react';
import DocumentMeta from 'react-document-meta';

export default class Index extends React.Component {
  render() {
    const meta = {
      title: 'Some Meta Title',
      description: 'I am a description, and I can create multiple tags',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    }
    return(
      <section class="page-login">
        <DocumentMeta {...meta} />
        <h1>Welcome!</h1>
      </section>
    )
  }
}
