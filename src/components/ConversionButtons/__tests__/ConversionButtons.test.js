import React from 'react';
import { mount, shallow } from 'enzyme';

import ConversionButtons from '../ConversionButtons';

describe('<ConversionButtons />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ConversionButtons
        buttons={[
          {
            type: 'facebook'
          },
          {
            type: 'pinterest'
          },
          {
            type: 'twitter'
          },
          {
            type: 'print'
          },
          {
            type: 'email'
          },
          {
            type: 'download'
          }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with custom className', () => {
    const wrapper = shallow(
      <ConversionButtons
        className="my-conversion-buttons"
        buttons={[
          {
            type: 'facebook'
          },
          {
            type: 'pinterest'
          },
          {
            type: 'twitter'
          },
          {
            type: 'print'
          },
          {
            type: 'email'
          },
          {
            type: 'download'
          }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly with custom button's attributes", () => {
    const wrapper = shallow(
      <ConversionButtons
        buttons={[
          {
            type: 'facebook',
            attributes: {
              'data-attribute': 'attribute'
            }
          }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with share', () => {
    const wrapper = shallow(
      <ConversionButtons
        share={{
          contentId: 1,
          customerId: 2,
          content: 'content',
          description: 'description',
          image: 'image'
        }}
        buttons={[
          {
            type: 'facebook'
          },
          {
            type: 'pinterest'
          },
          {
            type: 'twitter'
          },
          {
            type: 'print'
          },
          {
            type: 'email'
          },
          {
            type: 'download'
          }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with custom onClick handler', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <ConversionButtons
        buttons={[
          {
            type: 'facebook',
            onClick
          },
          {
            type: 'pinterest'
          }
        ]}
      />
    );

    const buttons = wrapper.find('button');
    expect(buttons).toHaveLength(2);

    buttons.first().simulate('click');
    expect(onClick.mock.calls).toHaveLength(1);

    wrapper.unmount();
  });

  it("should pass 'share' prop to custom click handler as 2nd argument", () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <ConversionButtons
        share={{
          contentId: 1,
          customerId: 2,
          content: 'content',
          description: 'description',
          image: 'image'
        }}
        buttons={[
          {
            type: 'facebook',
            onClick
          }
        ]}
      />
    );

    wrapper.find('button').simulate('click');

    expect(onClick.mock.calls).toHaveLength(1);
    expect(onClick.mock.calls[0][1]).toEqual({
      contentId: 1,
      customerId: 2,
      content: 'content',
      description: 'description',
      image: 'image'
    });

    wrapper.unmount();
  });
});
