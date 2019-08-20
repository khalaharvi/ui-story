import React from 'react';
import classnames from 'classnames';

import { createClassNames } from 'utils';

const cx = createClassNames('sellers-results');

const SellersResultsTemplate = ({ className, children }) => (
  <div className={classnames(cx(''), className)}>
    {children}
  </div>
);

export default SellersResultsTemplate;
