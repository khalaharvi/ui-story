import React from 'react';
import { mount, shallow } from 'enzyme';

import Link, { LinkWithIcon } from '../Link';

describe('<Link />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Link to="https://deringhall.com">Visit Dering Hall</Link>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with a child element', () => {
    const Element = () => (<span>Visit Dering Hall</span>);
    const wrapper = shallow(<Link to="https://deringhall.com"><Element /></Link>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with className prop', () => {
    const wrapper = shallow(<Link to="https://deringhall.com" className="custom-classname">Visit Dering Hall</Link>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an <a> with an href attribute', () => {
    const wrapper = mount(<Link to="https://deringhall.com/">Visit Dering Hall</Link>);

    const a = wrapper.find('a');

    expect(a).toHaveLength(1);
    expect(wrapper.getDOMNode().href).toBe('https://deringhall.com/');

    wrapper.unmount();
  });

  it('should have a rel="external noopener" and target="_blank" attributes when external', () => {
    const wrapper = mount(<Link to="https://deringhall" external>Visit Dering Hall</Link>);

    const a = wrapper.find('a');

    expect(a).toHaveLength(1);
    expect(wrapper.getDOMNode().rel).toBe('external noopener');
    expect(wrapper.getDOMNode().target).toBe('_blank');

    wrapper.unmount();
  });

  it('should have a rel="nofollow" attribute when noFollow', () => {
    const wrapper = mount(<Link to="https://deringhall" noFollow>Visit Dering Hall</Link>);

    const a = wrapper.find('a');

    expect(a).toHaveLength(1);
    expect(wrapper.getDOMNode().rel).toBe('nofollow');

    wrapper.unmount();
  });

  it('should have a rel="external noopener nofollow" and target="_blank" attributes when external and noFollow', () => {
    const wrapper = mount(<Link to="https://deringhall" external noFollow>Visit Dering Hall</Link>);

    const a = wrapper.find('a');

    expect(a).toHaveLength(1);
    expect(wrapper.getDOMNode().rel).toBe('external noopener nofollow');
    expect(wrapper.getDOMNode().target).toBe('_blank');

    wrapper.unmount();
  });

  it('calls onClick when it has an onClick prop', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Link to="https://deringhall.com/" onClick={onClick}>Visit Dering Hall</Link>);

    const a = wrapper.find('a');

    a.simulate('click');
    expect(onClick.mock.calls).toHaveLength(1);

    wrapper.unmount();
  });
});

describe('<LinkWithIcon />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <LinkWithIcon
        to="https://deringhall.com"
        icon={<i>custom-icon</i>}
        label="Label"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
