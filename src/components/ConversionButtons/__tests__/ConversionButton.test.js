import React from 'react';
import { shallow } from 'enzyme';

import { Facebook as FacebookIcon } from 'icons';
import ConversionButton from '../ConversionButton';

describe('<ConversionButton />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ConversionButton
        icon={<FacebookIcon />}
        type="facebook"
      />
    );

    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with a label', () => {
    const wrapper = shallow(
      <ConversionButton
        icon={<FacebookIcon />}
        type="facebook"
        label="Share on Facebook"
      />
    );

    expect(wrapper.find('[aria-label]')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with attributes', () => {
    const wrapper = shallow(
      <ConversionButton
        icon={<FacebookIcon />}
        type="facebook"
        label="Share on Facebook"
        attributes={{
          'data-test': 'test'
        }}
      />
    );

    expect(wrapper.find('[data-test]')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly has a link', () => {
    const wrapper = shallow(
      <ConversionButton
        icon={<FacebookIcon />}
        type="facebook"
        url="#"
      />
    );

    expect(wrapper.find('a')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onClick when clicked', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <ConversionButton
        icon={<FacebookIcon />}
        type="facebook"
        onClick={onClick}
      />
    );

    wrapper.find('button').simulate('click');
    expect(onClick.mock.calls).toHaveLength(1);
  });
});
