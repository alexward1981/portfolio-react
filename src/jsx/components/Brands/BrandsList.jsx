import React from 'react';
import { connect } from 'react-redux';
import { brandsLoad } from '../../../scripts/actions';

export class BrandsList extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(brandsLoad());
  }

  render() {
    const { brands } = this.props;
    const brandItems = brands.items;

    const brandList = brands && brandItems ? brandItems.asMutable().map((item) => {
      if(item.link) {
        return <li key={ item._id } class={item.class}><a href={item.link}><img src={item.image} alt={ item.name} /></a></li>
      } else {
        return <li key={ item._id } class={item.class}><img src={item.image} alt={item.name} /></li>
      }

    }) : null;
    if(brands.isFetching) {
      return(
        <section class="loader">
          <span>Content is loading...</span>
        </section>
      )
    } else {
      if(brandList) {
        return(
          <section class="c-brand-list">
            <ul>
              { brandList }
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
  const { brands } = state;
  return {
    brands
  };
}

export default connect(select)(BrandsList);
