import React from 'react';
import { shallow } from 'enzyme';

import { RangeFacet } from '../RangeFacet';

describe('<RangeFacet />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<RangeFacet refine={() => null} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with className', () => {
    const wrapper = shallow(
      <RangeFacet refine={() => null} className="custom-range-facet" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with transformLabel', () => {
    const wrapper = shallow(
      <RangeFacet
        refine={() => null}
        transformLabel={() => null}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
