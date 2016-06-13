import React from 'react';
import { connect } from 'react-redux';
import { testimonialsLoad } from '../../../scripts/actions';

export class TestimonialsList extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(testimonialsLoad());
  }

  render() {
    const { testimonials } = this.props;
    const testimonialsItems = testimonials.items;
    const testimonialsList = testimonials && testimonialsItems ? testimonialsItems.asMutable().map((item) => {
      function getReview() { return {__html: item.review}; };
      return (
        <li key={ item._id }>
          <blockquote itemprop="itemReviewed" itemscope itemtype="http://schema.org/Person">
            <span class="hide" itemprop="name">Alex Ward</span>
            <div itemprop="reviewBody" dangerouslySetInnerHTML={getReview()} />
            <span class="author" itemprop="author" itemscope itemtype="http://schema.org/Person">
              <a href={item.reviewerProfile}><img src={item.reviewerImage} alt={item.reviewerName} itemprop="image"/></a>
              <span itemprop="name"><a href={item.reviewerProfile}>{item.reviewerName}</a></span>
              &nbsp;-&nbsp;
              <span itemprop="jobTitle">{item.reviewerTitle}</span>
                &nbsp;@&nbsp;
              <span itemprop="worksFor">{item.reviewerCompany}</span>
            </span>
          </blockquote>
        </li>
      )
    }) : null;
    if(testimonials.isFetching) {
      return(
        <section class="loader">
          <span>Content is loading...</span>
        </section>
      )
    } else {
      if(testimonialsList) {
        return(
          <section class="c-testimonials-list">
            <ul itemscope itemtype="http://schema.org/Review">
              { testimonialsList }
            </ul>
          </section>
        )
      } else {
        return(
          <section class="loader">
            <span>Content isn't loading...</span>
          </section>
        )
      }
    }
  }
}

function select(state) {
  const { testimonials } = state;
  return {
    testimonials
  };
}

export default connect(select)(TestimonialsList);
