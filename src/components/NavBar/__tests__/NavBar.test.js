import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../NavBar';

const SearchInput = () => (<div>Search Input</div>);

describe('<NavBar />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <NavBar
        logo={{ src: 'https://placehold.it/259x28', alt: 'Logo' }}
        searchInputComponent={() => <SearchInput />}
      >
        Item
      </NavBar>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with className', () => {
    const wrapper = shallow(
      <NavBar
        logo={{ src: 'https://placehold.it/259x28', alt: 'Logo' }}
        searchInputComponent={() => <SearchInput />}
        className="custom-nav-bar"
      >
        Item
      </NavBar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
