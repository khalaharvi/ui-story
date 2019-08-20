import React from 'react';
import { mount, shallow } from 'enzyme';

import { SearchAutocomplete } from '../SearchAutocomplete';

const getSuggestionValue = hit => hit.title;
const hitTitleKey = 'title';

describe('<SearchAutocomplete />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SearchAutocomplete
      hits={[]}
      refine={() => null}
      getHitValue={getSuggestionValue}
      hitTitleKey={hitTitleKey}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with className', () => {
    const wrapper = shallow(<SearchAutocomplete
      hits={[]}
      refine={() => null}
      getHitValue={getSuggestionValue}
      hitTitleKey={hitTitleKey}
      className="custom-search-autocomplete"
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with a custom placeholder', () => {
    const wrapper = shallow(<SearchAutocomplete
      hits={[]}
      refine={() => null}
      placeholder="Search products..."
      getHitValue={getSuggestionValue}
      hitTitleKey={hitTitleKey}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with transformHit', () => {
    const wrapper = shallow(<SearchAutocomplete
      hits={[]}
      refine={() => null}
      getHitValue={getSuggestionValue}
      hitTitleKey={hitTitleKey}
      transformHit={hit => hit}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('treats its currentRefinement prop as its input value', () => {
    const wrapper = shallow(<SearchAutocomplete
      hits={[]}
      refine={() => null}
      currentRefinement="product"
      getHitValue={getSuggestionValue}
      hitTitleKey={hitTitleKey}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('refines its value on change', () => {
    const refine = jest.fn();
    const wrapper = mount(<SearchAutocomplete
      hits={[]}
      refine={refine}
      getHitValue={getSuggestionValue}
      hitTitleKey={hitTitleKey}
    />);

    wrapper.find('input').simulate('change', { target: { value: 'chair' } });

    expect(refine.mock.calls).toHaveLength(1);
    expect(refine.mock.calls[0][0]).toBe('chair');

    wrapper.unmount();
  });

  it('refines its value on blur', () => {
    const refine = jest.fn();
    const wrapper = mount(<SearchAutocomplete
      hits={[]}
      refine={refine}
      getHitValue={getSuggestionValue}
      hitTitleKey={hitTitleKey}
    />);

    wrapper.find('input').simulate('blur');

    expect(refine.mock.calls).toHaveLength(1);
    expect(refine.mock.calls[0][0]).toBe('');

    wrapper.unmount();
  });

  it('renders correctly with onHitSelected', () => {
    const wrapper = shallow(<SearchAutocomplete
      hits={[]}
      refine={() => null}
      getHitValue={getSuggestionValue}
      hitTitleKey={hitTitleKey}
      onHitSelected={() => null}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with onSubmit', () => {
    const wrapper = shallow(<SearchAutocomplete
      hits={[]}
      refine={() => null}
      getHitValue={getSuggestionValue}
      hitTitleKey={hitTitleKey}
      onSubmit={() => null}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call onSubmit with current input value', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(<SearchAutocomplete
      hits={[]}
      refine={() => null}
      getHitValue={getSuggestionValue}
      hitTitleKey={hitTitleKey}
      onSubmit={onSubmit}
    />);

    wrapper.find('input').simulate('change', { target: { value: 'chair' } });
    wrapper.find('form').simulate('submit');

    expect(onSubmit.mock.calls).toHaveLength(1);
    expect(onSubmit.mock.calls[0][0]).toBe('chair');

    wrapper.find('input').simulate('change', { target: { value: 'lamp' } });
    wrapper.find('[type="submit"]').simulate('submit');

    expect(onSubmit.mock.calls).toHaveLength(2);
    expect(onSubmit.mock.calls[1][0]).toBe('lamp');

    wrapper.unmount();
  });
});
