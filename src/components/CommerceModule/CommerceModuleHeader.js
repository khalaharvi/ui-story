import React from 'react';
import PropTypes from 'prop-types';

import { cx } from './CommerceModule';

const CommerceModuleHeader = ({ productName, brandName }) => (
  <div className={cx('header')}>
    <div className={cx('product-name-wrapper')}>
      <h1 itemProp="name" className={cx('product-name')}>{productName}</h1>
    </div>
    <p itemProp="brand" className={cx('brand-name')}>
      {brandName}
    </p>
  </div>
);

CommerceModuleHeader.propTypes = {
  productName: PropTypes.string.isRequired,
  brandName: PropTypes.node.isRequired
};

export default CommerceModuleHeader;
