import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { createClassNames } from 'utils';

export const cx = createClassNames('related-module');

const RelatedModuleTemplate = ({ children, className, title }) => (
  <div className={classnames(cx(''), className)}>
    <h2 className={cx('title')}>{title}</h2>
    <div className={cx('content')}>
      {children}
    </div>
  </div>
);

RelatedModuleTemplate.propTypes = {
  title: PropTypes.string.isRequired
};

export default RelatedModuleTemplate;
