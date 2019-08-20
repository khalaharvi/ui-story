import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cx } from './ConversionButtons';

const ConversionButton = ({
  icon,
  type,
  onClick,
  label,
  url,
  attributes
}) => (
  <Fragment>
    {
      (url) ?
        <a
          href={url}
          className={classnames(cx('btn'), cx(`btn-${type}`))}
          onClick={onClick}
          {...attributes}
        >
          {icon}
        </a> :
        <button
          className={classnames(cx('btn'), cx(`btn-${type}`))}
          type="button"
          onClick={onClick}
          aria-label={label}
          {...attributes}
        >
          {icon}
        </button>
    }
  </Fragment>
);

ConversionButton.propTypes = {
  icon: PropTypes.element.isRequired,
  type: PropTypes.oneOf(['facebook', 'twitter', 'pinterest', 'email', 'print', 'download']).isRequired,
  onClick: PropTypes.func,
  label: PropTypes.string,
  url: PropTypes.string,
  attributes: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

export default ConversionButton;
