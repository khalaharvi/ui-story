import React from 'react';
import { shallow } from 'enzyme';

import CommerceModulePhone from '../CommerceModulePhone';

describe('<CommerceModulePhone />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <CommerceModulePhone
        name="Awesome Showroom"
        phone="+33123456789"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
