import React from 'react';
import PropTypes from 'prop-types';

import { cx } from './ProductDetail';

const ProductDetailDescription = ({ description }) => (
  <div
    itemProp="description"
    dangerouslySetInnerHTML={{ __html: description }}
    className={cx('description')}
  />
);

ProductDetailDescription.propTypes = {
  description: PropTypes.string.isRequired
};

export default ProductDetailDescription;
