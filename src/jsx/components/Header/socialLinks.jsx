import React from 'react';
import { connect } from 'react-redux';
import { socialLinksLoad } from '../../../scripts/actions';

export class SocialLinks extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(socialLinksLoad());
  }

  render() {
    const { socialLinks } = this.props;
    const faString = 'fa ';
    const slComponents = socialLinks && socialLinks.items ? socialLinks.items.asMutable().map((item) => {
      return <li key={item._id}><a class={faString + item.class} title={item.title} href={item.link}>{item.label}</a></li>
    }) : null;
    if(socialLinks.isFetching) {
      return(
        <section class="loader">
          <span>Content is loading...</span>
        </section>
      )
    } else {
      return(
        <ul class="c-social-links">
          { slComponents }
        </ul>
      )
    }
  }
}

function select(state) {
  const { socialLinks } = state;
  return {
    socialLinks
  };
}

export default connect(select)(SocialLinks);
