import React from 'react';
import classnames from 'classnames';

import { createClassNames } from 'utils';

const cx = createClassNames('seller-profile');

const SellerProfileTemplate = ({ children, className }) => (
  <section className={classnames(cx(''), className)}>
    {children}
  </section>
);

export default SellerProfileTemplate;
