import React from 'react';
import PropTypes from 'prop-types';

import { cx } from './CommerceModule';

const CommerceModulePhone = ({ name, phone }) => (
  <p className={cx('phone')}>Or call {name}: <a href={`tel:${phone}`}>{phone}</a></p>
);

CommerceModulePhone.propTypes = {
  phone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default CommerceModulePhone;
