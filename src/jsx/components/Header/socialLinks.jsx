import React from 'react';
import { Link } from 'react-router';

import * as SocialLinkActions from '../../../../actions/socialLinkActions';
import SocialLinkStore from '../../../../stores/socialLinkStore';

export default class SocialLinks extends React.Component {
  constructor(props) {
    super();
    this.state = {
      socialLinks: SocialLinkStore.getAll()
    }
  }

  componentWillMount() {
    SocialLinkActions.loadLinks();
    SocialLinkStore.on("change", () => {
      this.setState({
        socialLinks: SocialLinkStore.getAll()
      })
    })

  }

  render() {
    const { socialLinks } = this.state;
    const faString = 'fa ';
    const slComponents = socialLinks.map((slItem) => {
      return <li key={slItem._id}><a class={faString + slItem.class} title={slItem.title} href={slItem.link}>{slItem.label}</a></li>
    });
      return(
        <ul class="c-social-links">
          { slComponents }
        </ul>
      )
  }
}
