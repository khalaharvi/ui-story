import React from 'react';
import PropTypes from 'prop-types';

import { capitalizeFirstLetter } from 'utils';
import Image from 'components/Image';
import { cx } from './SellersHits';

const getSellerTypeDisplayName = types =>
  types
    .map(type =>
      type.split('-').map(typeChunk =>
        capitalizeFirstLetter(typeChunk)).join(' '))
    .join(', ');

// TO DO: add fallback images
const SellerHit = ({ hit, transformHitImageUrl }) => (
  <div to={hit.product_path} className={cx('list-item-link')}>
    <div className={cx('list-item-img')}>
      <Image
        src={
          transformHitImageUrl ?
          transformHitImageUrl(hit.primary_image_url) :
          hit.primary_image_url
        }
        alt={hit.name}
      />
    </div>
    <b className={cx('list-item-name')}>{hit.name}</b>
    <i className={cx('list-item-types')}>{getSellerTypeDisplayName(hit.seller_types)}</i>
  </div>
);

SellerHit.propTypes = {
  transformHitImageUrl: PropTypes.func,
  hit: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    seller_types: PropTypes.arrayOf(PropTypes.string).isRequired,
    primary_image_url: PropTypes.string.isRequired,
    primary_type: PropTypes.string.isRequired
  })
};

export default SellerHit;
