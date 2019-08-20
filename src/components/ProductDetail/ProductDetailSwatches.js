import React from 'react';
import PropTypes from 'prop-types';

import { slugify } from 'utils';
import { cx } from './ProductDetail';

const ProductDetailSwatches = ({ title, items }) => (
  <div className={cx('swatches')}>
    <h2 className={cx('title')}>{title}</h2>
    <ul className={cx('swatches-list')}>
      {
        items.map(item => (
          <li key={`dh-swatch-${slugify(item.label)}`} className={cx('swatches-list-item')}>
            <figure>
              <img src={item.image} alt={item.label} />
              <figcaption>{item.label}</figcaption>
            </figure>
          </li>
        ))
      }
    </ul>
  </div>
);

ProductDetailSwatches.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    label: PropTypes.string
  })).isRequired
};

ProductDetailSwatches.defaultProps = {
  title: 'Available Finishes'
};

export default ProductDetailSwatches;
