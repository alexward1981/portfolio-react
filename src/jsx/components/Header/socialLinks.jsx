import React from 'react';
import { connect } from 'react-redux';
import { socialLinksLoad } from '../../../scripts/actions';

export default class SocialLinks extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(socialLinksLoad());
  }

  render() {
    const { socialLinks, isFetching } = this.props;
    const faString = 'fa ';
    const slComponents = socialLinks.items.asMutable().map((slItem) => {
      return <li key={slItem._id}><a class={faString + slItem.class} title={slItem.title} href={slItem.link}>{slItem.label}</a></li>
    });
    if(isFetching) {
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
