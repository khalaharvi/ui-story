import React from 'react';
import classnames from 'classnames';

import { createClassNames } from 'utils';

const cx = createClassNames('product-detail');

const ProductDetailTemplate = ({ children, className }) => (
  <section itemScope itemType="http://schema.org/Product" className={classnames(cx(''), className)}>
    <div className={cx('inner')}>
      {children}
    </div>
  </section>
);

export default ProductDetailTemplate;
