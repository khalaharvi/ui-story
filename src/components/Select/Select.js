import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash.get';
import styled, { cx as emotionCx } from 'react-emotion';

import { createClassNames } from 'utils';
import { Caret as CaretIcon } from 'icons';

export const cx = createClassNames('custom-select');

const StyledSelect = styled('div')(({ disabled, theme }) => {
  let hoverStyles;
  let color;
  let borderStyles;
  const backgroundColor = _get(theme, 'buttons.secondary.backgroundColor');

  if (!disabled) {
    hoverStyles = {
      borderColor: _get(theme, 'buttons.secondary.hover.borderColor')
    };
  }

  color = _get(theme, 'buttons.secondary.color');

  borderStyles = {
    border: `1px solid ${_get(theme, 'buttons.secondary.borderColor')}`,
    borderColor: _get(theme, 'buttons.secondary.borderColor')
  };

  if (disabled) {
    color = _get(theme, 'buttons.secondary.disabled.color');

    borderStyles = {
      ...borderStyles,
      borderColor: _get(theme, 'buttons.secondary.disabled.borderColor')
    };
  }

  return {
    position: 'relative',

    backgroundColor,
    color,
    ...borderStyles,
    '&:hover': hoverStyles,
    height: 45,
    cursor: !disabled ? 'pointer' : 'not-allowed',

    svg: {
      position: 'absolute',
      display: 'block',
      top: '50%',
      right: 20,
      transform: 'translateY(-50%)',
      marginLeft: 5,
      width: 13,
      height: 6,
      stroke: 'currentColor'
    }
  };
});

const StyledHTMLSelect = styled('select')({
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  margin: 0,
  padding: '0 38px 0 20px',
  background: 'none',
  outline: 0,
  appearance: 'none',
  border: 0,
  lineHeight: '43px',
  color: 'inherit',

  '&[disabled]': {
    cursor: 'not-allowed'
  }
});

export const Select = ({
  className,
  items,
  value,
  onChange
}) => (
  <StyledSelect className={emotionCx(cx(''), className)}>
    <StyledHTMLSelect
      className={cx('select')}
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
    >
      {items.map(item => (
        <option
          className={cx('option')}
          key={item.value}
          disabled={item.disabled}
          value={item.value}
        >
          {item.label || item.value}
        </option>
      ))}
    </StyledHTMLSelect>
    <CaretIcon />
  </StyledSelect>
);

Select.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Select;
