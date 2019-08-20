import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { createClassNames } from 'utils';

const cx = createClassNames('section-nav');

const SectionNav = ({ children, className }) => (
  <nav className={classnames(cx(''), className)}>
    <ul className={cx('list')}>
      {
        Children.map(children, child => (
          <li className={cx('list-item')}>{child}</li>
        ))
      }
    </ul>
  </nav>
);

SectionNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default SectionNav;
