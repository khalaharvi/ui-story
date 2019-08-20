import React from 'react';
import { shallow } from 'enzyme';

import Image from '../Image';

describe('<Image />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Image src="https://placehold.it/120x20" alt="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with a className prop', () => {
    const wrapper = shallow(<Image src="https://placehold.it/120x20" alt="Placeholder" className="image" />);
    expect(wrapper).toMatchSnapshot();
  });
});
