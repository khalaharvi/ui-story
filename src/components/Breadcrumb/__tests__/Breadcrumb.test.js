import React from 'react';
import { mountWithTheme } from 'utils/testing';

import Breadcrumb from '../Breadcrumb';

describe('<Breadcrumb />', () => {
  it('renders correctly', () => {
    const wrapper = mountWithTheme(
      <Breadcrumb
        items={[
          {
            href: '/white',
            label: 'white'
          },
          {
            href: '/white/white1',
            label: 'white1'
          },
          {
            href: 'white/white1/white11',
            label: 'white1.1'
          }
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly without items', () => {
    const wrapper = mountWithTheme(<Breadcrumb />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with rootLabel', () => {
    const wrapper = mountWithTheme(
      <Breadcrumb
        rootLabel="Homepage"
        items={[
          {
            href: '/white',
            label: 'white'
          },
          {
            href: '/white/white1',
            label: 'white1'
          },
          {
            href: 'white/white1/white11',
            label: 'white1.1'
          }
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('has a rootURL prop', () => {
    const rootLink = 'deringhall.com';

    const wrapper = mountWithTheme(
      <Breadcrumb
        rootURL={rootLink}
        items={[
          {
            href: '/white',
            label: 'white'
          },
          {
            href: '/white/white1',
            label: 'white1'
          },
          {
            href: 'white/white1/white11',
            label: 'white1.1'
          }
        ]}
      />
    );

    const breadcrumb = wrapper.find('ul');

    expect(breadcrumb.children()).toHaveLength(4);

    expect(
      wrapper
        .find('a')
        .first()
        .prop('href')
    ).toEqual('deringhall.com');

    wrapper.unmount();
  });

  it('has a separator prop that can be a custom component', () => {
    const wrapper = mountWithTheme(
      <Breadcrumb
        separator={<span role="img" aria-label="separator">🔍</span>}
        items={[
          {
            href: '/white',
            label: 'white'
          },
          {
            href: '/white/white1',
            label: 'white1'
          },
          {
            href: 'white/white1/white11',
            label: 'white1.1'
          }
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('has a rootComponent prop that can be a custom component', () => {
    const wrapper = mountWithTheme(
      <Breadcrumb
        rootComponent={({ label }) => (<span>{label}</span>)}
        items={[
          {
            href: '/white',
            label: 'white'
          },
          {
            href: '/white/white1',
            label: 'white1'
          },
          {
            href: 'white/white1/white11',
            label: 'white1.1'
          }
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('has a itemComponent prop that can be a custom component', () => {
    const wrapper = mountWithTheme(
      <Breadcrumb
        itemComponent={({ item }) => (<span>{item.label}</span>)}
        items={[
          {
            href: '/white',
            label: 'white'
          },
          {
            href: '/white/white1',
            label: 'white1'
          },
          {
            href: 'white/white1/white11',
            label: 'white1.1'
          }
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
