import React from 'react';
import classnames from 'classnames';

import { createClassNames } from 'utils';

const cx = createClassNames('facets');

const FacetsTemplate = ({ className, children }) => (
  <div className={classnames(cx(''), className)}>{children}</div>
);

export default FacetsTemplate;
