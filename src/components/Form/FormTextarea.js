import React from 'react';

import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormError from './FormError';
import { FormInput } from './FormInput';

export const FormTextarea = FormInput.withComponent('textarea');

export default ({
  id,
  label,
  error,
  ...props
}) => (
  <FormGroup>
    <FormLabel htmlFor={id}>{label}</FormLabel>
    <FormTextarea {...props} id={id} error={error} />
    { error && (
      <FormError>{error}</FormError>
    )}
  </FormGroup>
);
