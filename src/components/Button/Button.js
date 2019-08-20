import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import _get from 'lodash.get';

const styles = ({
  primary,
  secondary,
  inverted,
  disabled,
  icon,
  iconAfter,
  white,
  theme
}) => {
  let backgroundColor;
  let color;
  let hoverStyles;
  let borderStyles;

  if (!disabled) {
    if (primary) {
      hoverStyles = {
        backgroundColor: _get(theme, 'buttons.primary.hover.backgroundColor'),
        borderColor: _get(theme, 'buttons.primary.hover.borderColor'),
        color: _get(theme, 'buttons.primary.hover.color')
      };

      if (inverted) {
        hoverStyles = {
          backgroundColor: _get(theme, 'buttons.primaryInverted.hover.backgroundColor'),
          color: _get(theme, 'buttons.primaryInverted.hover.color')
        };
      }

      if (white) {
        hoverStyles = {
          backgroundColor: _get(theme, 'buttons.primaryWhite.hover.backgroundColor'),
          color: _get(theme, 'buttons.primaryWhite.hover.color')
        };
      }
    }

    if (secondary) {
      hoverStyles = {
        borderColor: _get(theme, 'buttons.secondary.hover.borderColor')
      };
    }
  }

  if (primary) {
    backgroundColor = _get(theme, 'buttons.primary.backgroundColor');
    color = _get(theme, 'buttons.primary.color');
    borderStyles = {
      border: _get(theme, 'buttons.primary.border')
    };

    if (disabled) {
      backgroundColor = _get(theme, 'buttons.primary.disabled.backgroundColor');
      borderStyles = {};
      color = _get(theme, 'buttons.primary.disabled.color');
    }

    if (!disabled && inverted) {
      backgroundColor = _get(theme, 'buttons.primaryInverted.backgroundColor');
      borderStyles = {
        border: _get(theme, 'buttons.primaryInverted.border')
      };
      color = _get(theme, 'buttons.primaryInverted.color');
    }

    if (!disabled && white) {
      backgroundColor = _get(theme, 'buttons.primaryWhite.backgroundColor');
      borderStyles = {
        border: _get(theme, 'buttons.primaryWhite.border')
      };
      color = _get(theme, 'buttons.primaryWhite.color');
    }
  }

  if (secondary) {
    backgroundColor = _get(theme, 'buttons.secondary.backgroundColor');
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
  }

  return {
    backgroundColor,
    color,
    lineHeight: disabled && !secondary ? '45px' : '43px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    '&:hover': hoverStyles,
    ...borderStyles,

    display: icon ? 'flex' : undefined,
    alignItems: icon ? 'center' : undefined,
    svg: {
      margin: iconAfter ? '0 0 0 5px' : '0 5px 0 0',
      fill: 'currentColor'
    }
  };
};

const Button = styled('button')({
  padding: '0 20px',
  appearance: 'none',
  border: 0,
  outline: 0,
  background: 'none',
  cursor: 'pointer',
  lineHeight: '45px'
}, styles);

const ButtonComponent = ({
  disabled,
  loading,
  children,
  icon: Icon,
  iconAfter,
  ...rest
}) => (
  <Button disabled={disabled || loading} icon={!!Icon} iconAfter={iconAfter} {...rest}>
    { Icon && !iconAfter ? Icon : null }
    <span>{children}</span>
    { Icon && iconAfter ? Icon : null }
  </Button>
);

ButtonComponent.propTypes = {
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  white: PropTypes.bool,
  secondary: PropTypes.bool,
  inverted: PropTypes.bool,
  icon: PropTypes.element,
  iconAfter: PropTypes.bool
};

ButtonComponent.defaultProps = {
  disabled: false,
  hidden: false,
  loading: false,

  inverted: false,
  white: false,
  primary: false,
  secondary: false,
  iconAfter: false
};

export default ButtonComponent;
