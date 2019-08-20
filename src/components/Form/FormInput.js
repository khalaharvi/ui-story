import React from 'react';
import styled from 'react-emotion';
import _get from 'lodash.get';

import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormError from './FormError';

export const INPUT_X_PADDING = 12;
export const INPUT_LINE_HEIGHT = 46;
export const inputColor = theme => _get(theme, 'text.primary');
export const inputBgColor = theme => _get(theme, 'forms.input.bgColor');
export const inputBorderColor = (theme, error = undefined) => _get(theme, error ? 'colors.primary.red' : 'forms.input.borderColor');
export const inputFocusBorderColor = theme => _get(theme, 'text.secondary');
export const inputPlaceholderColor = theme => _get(theme, 'forms.placeholder.color');

export const FormInput = styled('input')(({ theme, error }) => ({
  display: 'block',
  padding: `0 ${INPUT_X_PADDING}px`,
  width: '100%',
  color: inputColor(theme),
  border: `1px solid ${inputBorderColor(theme, error)}`,
  backgroundColor: inputBgColor(theme),
  lineHeight: `${INPUT_LINE_HEIGHT}px`,

  ':focus': {
    borderColor: inputFocusBorderColor(theme)
  },

  ':invalid': {
    borderColor: inputBorderColor(theme, true),
    boxShadow: 'none'
  },

  '&[disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed'
  },

  '::placeholder': {
    color: inputPlaceholderColor(theme)
  }
}));

export default ({
  id,
  label,
  error,
  ...props
}) => (
  <FormGroup>
    <FormLabel htmlFor={id}>{label}</FormLabel>
    <FormInput {...props} id={id} error={!!error} />
    { error && (
      <FormError>{error}</FormError>
    )}
  </FormGroup>
);
