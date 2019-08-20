import React from 'react';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';

import { cx } from './ProductDetail';

const ProductDetailGallery = ({ images }) => (
  <div className={cx('gallery')}>
    <ImageGallery
      items={images}
      showNav={false}
      showPlayButton={false}
      showFullscreenButton={false}
      showThumbnails={images.length > 1}
    />
  </div>
);

ProductDetailGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    original: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  }))
};

export default ProductDetailGallery;
