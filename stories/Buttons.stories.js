import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@dering-hall/dh-theme';
import Button from 'components/Button';
import { Hamburger as HamburgerIcon } from 'icons';

storiesOf('Buttons', module)
  .addWithJSX('default', () => (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Button primary>Primary</Button>
        {'  '}
        <Button primary disabled>Primary Disabled</Button>
        {'  '}
        <Button primary loading>Primary Loading...</Button>
        <br />
        <br />
        <Button primary inverted>Primary Inverted</Button>
        {'  '}
        <Button primary inverted disabled>Primary Inverted Disabled</Button>
        {'  '}
        <Button primary inverted loading>Primary Inverted Loading...</Button>
        <br />
        <br />
        <div style={{ padding: '10px', backgroundColor: '#242424', display: 'inline-block' }}>
          <Button primary white>Primary White</Button>
        </div>
        <br />
        <br />
        <Button secondary>Secondary</Button>
        {'  '}
        <Button secondary disabled>Secondary Disabled</Button>
        {'  '}
        <Button secondary loading>Secondary Loading...</Button>
        <br />
        <br />
        <Button
          secondary
          icon={<HamburgerIcon width={14} height={11} />}
          iconAfter
        >
          Secondary with icon after
        </Button>
        <br />
        <Button
          secondary
          icon={<HamburgerIcon width={14} height={11} />}
          disabled
        >
          Secondary Disabled with icon
        </Button>
      </Fragment>
    </ThemeProvider>
  ));
