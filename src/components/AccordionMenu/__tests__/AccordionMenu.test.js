import React from 'react';
import { shallowWithTheme, mountWithTheme } from 'utils/testing';

import AccordionMenu from '../AccordionMenu';
import AccordionMenuList from '../AccordionMenuList';
import AccordionMenuToggle from '../AccordionMenuToggle';

const accordionMenuItems = [
  {
    render: () => <AccordionMenu.FavoriteButton />
  },
  {
    label: 'Tearsheet',
    items: [
      {
        label: 'Download',
        href: '#'
      },
      {
        label: 'Print',
        href: '#',
        attributes: {
          rel: 'nofollow'
        }
      }
    ]
  },
  {
    label: 'Share',
    items: [
      {
        label: 'Facebook',
        href: '#'
      },
      {
        label: 'Pinterest',
        href: '#'
      },
      {
        label: 'Copy Link'
      }
    ]
  }
];

describe('<AccordionMenu />', () => {
  it('renders correctly', () => {
    const wrapper = mountWithTheme(
      <AccordionMenu items={accordionMenuItems} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when right aligned', () => {
    const wrapper = mountWithTheme(
      <AccordionMenu items={accordionMenuItems} alignRight />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when small', () => {
    const wrapper = mountWithTheme(
      <AccordionMenu items={accordionMenuItems} small />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when small and right aligned', () => {
    const wrapper = mountWithTheme(
      <AccordionMenu items={accordionMenuItems} alignRight small />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should update 'active' state when toggle is clicked", () => {
    const items = [
      {
        label: 'First item'
      },
      {
        label: 'Tearsheet',
        items: [
          {
            label: 'Download',
            href: '#'
          },
          {
            label: 'Print',
            href: '#'
          }
        ]
      }
    ];

    const wrapper = shallowWithTheme(
      <AccordionMenu items={items} />
    );

    const toggle = wrapper.find('AccordionMenuToggle');

    toggle.simulate('click');

    expect(wrapper.state('active')).toBe(1);

    toggle.simulate('click');

    expect(wrapper.state('active')).toBeNull();
  });

  it("should update 'active' prop when toggle is clicked", () => {
    const items = [
      {
        label: 'First item'
      },
      {
        label: 'Tearsheet',
        items: [
          {
            label: 'Download',
            href: '#'
          },
          {
            label: 'Print',
            href: '#'
          }
        ]
      }
    ];

    const wrapper = shallowWithTheme(
      <AccordionMenu items={items} />
    );

    const toggle = wrapper.find('AccordionMenuToggle');

    toggle.simulate('click');

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('AccordionMenuToggle').prop('active')).toBe(true);

    toggle.simulate('click');

    expect(wrapper.find('AccordionMenuToggle').prop('active')).toBe(false);
  });
});

describe('<AccordionMenuList />', () => {
  it('renders correctly', () => {
    const wrapper = mountWithTheme(
      <AccordionMenuList>
        <li>Item</li>
      </AccordionMenuList>
    );

    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('renders correctly when not active', () => {
    const wrapper = mountWithTheme(
      <AccordionMenuList active={false}>
        <li>Item</li>
      </AccordionMenuList>
    );

    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});

describe('<AccordionMenuToggle />', () => {
  it('renders correctly', () => {
    const wrapper = mountWithTheme(
      <AccordionMenuToggle>
        Toggle
      </AccordionMenuToggle>
    );

    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('renders correctly with active', () => {
    const wrapper = mountWithTheme(
      <AccordionMenuToggle active>
        Toggle
      </AccordionMenuToggle>
    );

    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
