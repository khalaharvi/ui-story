import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@dering-hall/dh-theme';
import { FormInput, FormTextarea, FormSubmit, FormCheckbox } from 'components/Form';

storiesOf('Form', module)
  .addWithJSX('input', () => (
    <ThemeProvider theme={theme}>
      <Fragment>
        <FormInput type="text" id="input" label="First Name" placeholder="First Name" />
        <FormInput type="text" id="input2" label="Last Name" placeholder="Last Name" />
      </Fragment>
    </ThemeProvider>
  ))
  .addWithJSX('input with error', () => (
    <ThemeProvider theme={theme}>
      <FormInput type="text" id="input" label="Name" placeholder="Name" error="Name is required." />
    </ThemeProvider>
  ))
  .addWithJSX('textarea', () => (
    <ThemeProvider theme={theme}>
      <FormTextarea id="input" label="Message" placeholder="Message" />
    </ThemeProvider>
  ))
  .addWithJSX('checkbox', () => (
    <ThemeProvider theme={theme}>
      <FormCheckbox id="checkbox" label="Message For Checking" />
    </ThemeProvider>
  ))
  .addWithJSX('checkbox with error', () => (
    <ThemeProvider theme={theme}>
      <FormCheckbox id="input" label="Checkbox error" error="Must Check" />
    </ThemeProvider>
  ))
  .addWithJSX('submit', () => (
    <ThemeProvider theme={theme}>
      <Fragment>
        <FormSubmit type="submit">
          Submit
        </FormSubmit>
        <FormSubmit type="submit" disabled>
          Disabled
        </FormSubmit>
      </Fragment>
    </ThemeProvider>
  ));
