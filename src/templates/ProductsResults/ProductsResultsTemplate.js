import React from 'react';
import classnames from 'classnames';

import { createClassNames } from 'utils';

const cx = createClassNames('products-results');

const ProductsResultsTemplate = ({ className, children }) => (
  <div className={classnames(cx(''), className)}>
    {children}
  </div>
);

export default ProductsResultsTemplate;
