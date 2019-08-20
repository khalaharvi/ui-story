import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { createClassNames } from 'utils';

export const cx = createClassNames('section-header');

const SectionHeaderTemplate = ({
  children,
  className,
  title,
  subtitle
}) => (
  <div className={classnames(cx(''), className)}>
    <h1 className={cx('h1')}>{title}</h1>
    {subtitle && <p className={cx('h2')}>{subtitle}</p>}
    {children}
  </div>
);

SectionHeaderTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default SectionHeaderTemplate;
