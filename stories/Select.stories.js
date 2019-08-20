import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@dering-hall/dh-theme';
import Select from 'components/Select';

storiesOf('Select', module)
  .addWithJSX('default', () => (
    <ThemeProvider theme={theme}>
      <Select
        onChange={() => null}
        items={[
          { value: 'index1', label: 'index name 1' },
          { value: 'index2', label: 'index name 2' },
          { value: 'index3', label: 'index name 3' },
          { value: 'index4', label: 'index name 4' }
        ]}
        value="index1"
      />
    </ThemeProvider>
  ));
