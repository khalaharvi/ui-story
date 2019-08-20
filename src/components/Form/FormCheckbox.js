import React from 'react';
import styled from 'react-emotion';
import _get from 'lodash.get';

import FormGroup from './FormGroup';
import FormError from './FormError';

export const INPUT_X_PADDING = 12;
export const INPUT_LINE_HEIGHT = 46;
export const inputColor = theme => _get(theme, 'text.primary');
export const inputBgColor = theme => _get(theme, 'forms.input.bgColor');
export const inputBorderColor = (theme, error = undefined) => _get(theme, error ? 'colors.primary.red' : 'forms.input.borderColor');
export const inputFocusBorderColor = theme => _get(theme, 'text.secondary');
export const inputPlaceholderColor = theme => _get(theme, 'forms.placeholder.color');

export const FormInput = styled('input')(({ theme, error }) => ({
  display: 'inline',
  padding: `0 ${INPUT_X_PADDING}px`,
  color: inputColor(theme),
  border: `1px solid ${inputBorderColor(theme, error)}`,
  backgroundColor: inputBgColor(theme),
  lineHeight: `${INPUT_LINE_HEIGHT}px`,
  opacity: 0,

  ':focus': {
    borderColor: inputFocusBorderColor(theme)
  },

  ':invalid': {
    borderColor: inputBorderColor(theme, true),
    boxShadow: 'none'
  }
}));

const FormCheckboxLabel = styled('label')({
  display: 'inline',
  position: 'relative',
  paddingLeft: '22px',
  marginBottom: 12
});

const FormCheckboxContainer = styled('div')({
  display: 'inline',
  marginBottom: 12,
  'input[type="checkbox"] + label:after': {
    content: 'none'
  },
  'input[type="checkbox"]:checked + label:after': {
    content: '""'
  },
  label: {
    ':before, :after': {
      position: 'absolute',
      content: '""',
      display: 'inline-block'
    },
    ':before': {
      height: '16px',
      width: '16px',
      border: '1px solid',
      left: '0px',

      // /*(24px line-height - 16px height of fake checkbox) / 2 - 1px for the border
      //  *to vertically center it.
      //  */
      top: '3px'
    },
    ':after': {
      height: '5px',
      width: '9px',
      borderLeft: '2px solid',
      borderBottom: '2px solid',
      transform: 'rotate(-45deg)',
      left: '4px',
      top: '7px'
    }
  }
});

export default ({
  id,
  label,
  error,
  ...props
}) => (
  <FormCheckboxContainer>
    <FormGroup>
      <FormInput {...props} id={id} error={!!error} type="checkbox" />
      <FormCheckboxLabel htmlFor={id}>{label}</FormCheckboxLabel>
      { error && (
        <FormError>{error}</FormError>
      )}
    </FormGroup>
  </FormCheckboxContainer>
);
