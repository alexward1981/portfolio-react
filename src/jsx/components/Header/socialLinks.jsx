import React from 'react';
import { Link } from 'react-router';

export default class SocialLinks extends React.Component {
  constructor(props) {
    super();
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
