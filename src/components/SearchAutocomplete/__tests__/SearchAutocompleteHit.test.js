import React from 'react';
import { mount, shallow } from 'enzyme';

import SearchAutocompleteHit from '../SearchAutocompleteHit';

const hit = {
  title: 'Hit Title',
  image: 'https://placehold.it/50x50'
};
const hitTitleKey = 'title';
const hitImageKey = 'image';

describe('<SearchAutocompleteHit />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SearchAutocompleteHit hit={hit} hitTitleKey={hitTitleKey} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with hitTitleKey array prop', () => {
    const wrapper = shallow(<SearchAutocompleteHit hit={hit} hitTitleKey={['title', 'name']} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with hitImageKey prop', () => {
    const wrapper = shallow(<SearchAutocompleteHit
      hit={hit}
      hitTitleKey={hitTitleKey}
      hitImageKey={hitImageKey}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with hitImageKey array prop', () => {
    const wrapper = shallow(<SearchAutocompleteHit
      hit={hit}
      hitTitleKey={hitTitleKey}
      hitImageKey={['image', 'primary_image']}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an <img /> when hitImageKey prop is passed', () => {
    const wrapper = mount(<SearchAutocompleteHit
      hit={hit}
      hitTitleKey={hitTitleKey}
      hitImageKey={hitImageKey}
    />);

    const img = wrapper.find('img');

    expect(img).toHaveLength(1);

    wrapper.unmount();
  });

  it('should have an <img /> when hitImageKey array prop is passed', () => {
    const wrapper = mount(<SearchAutocompleteHit
      hit={hit}
      hitTitleKey={hitTitleKey}
      hitImageKey={['image', 'primary_image']}
    />);

    const img = wrapper.find('img');

    expect(img).toHaveLength(1);

    wrapper.unmount();
  });

  it("shouldn't have an <img /> when 'hitImageKey' key doesn't exist", () => {
    const wrapper = mount(<SearchAutocompleteHit
      hit={hit}
      hitTitleKey={hitTitleKey}
      hitImageKey="primary_image"
    />);

    const img = wrapper.find('img');

    expect(img).toHaveLength(0);

    wrapper.unmount();
  });
});
