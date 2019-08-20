import React from 'react';
import { shallow } from 'enzyme';

import { ActiveFacets } from '../ActiveFacets';

describe('<ActiveFacets />', () => {
  const defaultProps = {
    items: [],
    canRefine: true,
    refine: () => null
  };

  it('renders correctly', () => {
    const props = {
      ...defaultProps,
      canRefine: false
    };

    const wrapper = shallow(
      <ActiveFacets {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with className', () => {
    const props = {
      ...defaultProps,
      canRefine: false,
      className: 'custom-active-facets'
    };

    const wrapper = shallow(
      <ActiveFacets {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly without refinements', () => {
    const props = {
      ...defaultProps,
      items: [
        { label: 'materials: Wood', value: () => {} },
        {
          label: 'category:',
          value: () => {},
          items: [
            { label: 'Furniture', value: () => {} },
            { label: 'Bed', value: () => {} }
          ]
        }
      ]
    };

    const wrapper = shallow(
      <ActiveFacets {...props} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should refine the "materials" onClick', () => {
    const value = () => {};
    const props = {
      ...defaultProps,
      items: [
        { label: 'materials: Wood', value },
        {
          label: 'category:',
          value: () => {},
          items: [
            { label: 'Furniture', value: () => {} },
            { label: 'Bed', value: () => {} }
          ]
        }
      ],
      refine: jest.fn()
    };

    const wrapper = shallow(<ActiveFacets {...props} />);

    expect(props.refine).not.toHaveBeenCalled();

    wrapper
      .find('li')
      .first()
      .find('button')
      .simulate('click');

    expect(props.refine).toHaveBeenCalledWith(value);
  });

  it('should refine the "category: Bed" onClick', () => {
    const value = () => {};
    const props = {
      ...defaultProps,
      items: [
        { label: 'materials: Wood', value: () => {} },
        {
          label: 'category:',
          value: () => {},
          items: [
            { label: 'Furniture', value: () => {} },
            { label: 'Bed', value }
          ]
        }
      ],
      refine: jest.fn()
    };

    const wrapper = shallow(<ActiveFacets {...props} />);

    expect(props.refine).not.toHaveBeenCalled();

    wrapper
      .find('li')
      .last()
      .find('button')
      .last()
      .simulate('click');

    expect(props.refine).toHaveBeenCalledWith(value);
  });
});
