import React from 'react';
import classnames from 'classnames';

import { createClassNames } from 'utils';

const cx = createClassNames('commerce-module');

export const CommerceModuleMetaTemplate = ({ children }) => (
  <div itemProp="offers" itemScope itemType="http://schema.org/Offer" className={cx('meta')}>
    {children}
  </div>
);

const CommerceModuleTemplate = ({ children, className }) => (
  <div className={classnames(cx(''), className)}>
    {children}
  </div>
);

export default CommerceModuleTemplate;
