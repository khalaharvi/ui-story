import React from 'react';
import { storiesOf } from '@storybook/react';

import SectionNav from 'components/SectionNav';
import { withTests } from './utils';

storiesOf('Section Nav', module)
  .addDecorator(withTests('SectionNav'))
  .addWithJSX('default', () => (
    <SectionNav>
      <a className="dh-section-nav-link dh-section-nav-link--active" href="/">Featured Professionals</a>
      <a className="dh-section-nav-link" href="/">Interior Designer</a>
      <a className="dh-section-nav-link" href="/">Architect</a>
      <a className="dh-section-nav-link" href="/">Landscape Designer</a>
      <a className="dh-section-nav-link" href="/">Specialty Artisan</a>
      <a className="dh-section-nav-link" href="/">Professionals A-Z</a>
    </SectionNav>
  ));
