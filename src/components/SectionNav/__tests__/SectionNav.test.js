import React from 'react';
import { shallow } from 'enzyme';

import SectionNav from '../SectionNav';

describe('<SectionNav />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SectionNav>
        <a href="/">Item 1</a>
        <a href="/">Item 2</a>
        <a href="/">Item 3</a>
      </SectionNav>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with custom className', () => {
    const wrapper = shallow(
      <SectionNav className="custom-section-nav">
        <a href="/">Item 1</a>
        <a href="/">Item 2</a>
        <a href="/">Item 3</a>
      </SectionNav>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
