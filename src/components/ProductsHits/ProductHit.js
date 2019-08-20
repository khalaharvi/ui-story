import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/Image';
import { cx } from './ProductsHits';

// TO DO: add fallback images
const getDisplayPrice = (price) => {
  let displayPrice = 'Price on Request';

  if (price) {
    displayPrice = `$${price.toLocaleString()}`;
  }

  return displayPrice;
};

const ProductHit = ({ hit, transformHitImageUrl }) => (
  <div>
    <div className={cx('list-item-img')}>
      <Image
        src={
          transformHitImageUrl ?
          transformHitImageUrl(hit.primary_image_url) :
          hit.primary_image_url
        }
        alt={hit.title}
      />
    </div>
    <b className={cx('list-item-title')}>{hit.title}</b>
    <i className={cx('list-item-brand')}>{hit.brand_name}</i>
    <span className={cx('list-item-price')}>{getDisplayPrice(hit.price)}</span>
  </div>
);

ProductHit.propTypes = {
  transformHitImageUrl: PropTypes.func,
  hit: PropTypes.shape({
    brand_name: PropTypes.string.isRequired,
    objectID: PropTypes.string.isRequired,
    price: PropTypes.number,
    primary_image_url: PropTypes.string.isRequired,
    product_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
};

export default ProductHit;
