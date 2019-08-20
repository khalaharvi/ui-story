import React from 'react';
import PropTypes from 'prop-types';

import { createClassNames } from 'utils';
import Link from 'components/Link';
import DeringHallLogo from './DeringHallLogo';

export const cx = createClassNames('poweredby');

const PoweredBy = ({ to }) => (
  <div className={cx('')}>
    <Link className={cx('link')} to={to}>
      <small>Powered By</small>
      <DeringHallLogo />
    </Link>
  </div>
);

PoweredBy.propTypes = {
  to: PropTypes.string
};

PoweredBy.defaultProps = {
  to: 'https://deringhall.com?ref=ui-kit'
};

export default PoweredBy;
