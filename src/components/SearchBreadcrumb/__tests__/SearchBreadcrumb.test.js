import React from 'react';
import { mount, shallow } from 'enzyme';

import Link from 'components/Link';
import { SearchBreadcrumb } from '../SearchBreadcrumb';

describe('<SearchBreadcrumb />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SearchBreadcrumb
        refine={() => null}
        createURL={() => '#'}
        canRefine
        items={[
          {
            value: 'white',
            label: 'white'
          },
          {
            value: 'white > white1',
            label: 'white1'
          },
          {
            value: 'white > white1 > white1.1',
            label: 'white1.1'
          }
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with rootLabel', () => {
    const wrapper = shallow(
      <SearchBreadcrumb
        refine={() => null}
        createURL={() => '#'}
        canRefine
        rootLabel="Homepage"
        items={[
          {
            value: 'white',
            label: 'white'
          },
          {
            value: 'white > white1',
            label: 'white1'
          },
          {
            value: 'white > white1 > white1.1',
            label: 'white1.1'
          }
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with no refinements', () => {
    const wrapper = shallow(
      <SearchBreadcrumb
        refine={() => null}
        createURL={() => '#'}
        canRefine={false}
        items={[
          {
            value: 'white',
            label: 'white'
          },
          {
            value: 'white > white1',
            label: 'white1'
          },
          {
            value: 'white > white1 > white1.1',
            label: 'white1.1'
          }
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with alwaysShowRoot', () => {
    const wrapper = shallow(
      <SearchBreadcrumb
        refine={() => null}
        createURL={() => '#'}
        canRefine={false}
        alwaysShowRoot
        items={[
          {
            value: 'white',
            label: 'white'
          },
          {
            value: 'white > white1',
            label: 'white1'
          },
          {
            value: 'white > white1 > white1.1',
            label: 'white1.1'
          }
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('refines its value on change', () => {
    const refine = jest.fn();
    const wrapper = mount(
      <SearchBreadcrumb
        refine={refine}
        createURL={() => '#'}
        canRefine
        items={[
          {
            value: 'white',
            label: 'white'
          },
          {
            value: 'white > white1',
            label: 'white1'
          },
          {
            value: 'white > white1 > white1.1',
            label: 'white1.1'
          }
        ]}
      />
    );

    const breadcrumb = wrapper.find('ul');

    expect(breadcrumb.children()).toHaveLength(4);

    breadcrumb
      .children()
      .first()
      .find(Link)
      .simulate('click');
    expect(refine.mock.calls).toHaveLength(1);
    expect(refine.mock.calls[0][0]).toEqual();

    breadcrumb
      .children()
      .at(1)
      .find(Link)
      .simulate('click');
    expect(refine.mock.calls).toHaveLength(2);
    expect(refine.mock.calls[1][0]).toEqual('white');

    breadcrumb
      .children()
      .at(2)
      .find(Link)
      .simulate('click');
    expect(refine.mock.calls).toHaveLength(3);
    expect(refine.mock.calls[2][0]).toEqual('white > white1');

    const lastItem = breadcrumb
      .children()
      .at(3)
      .find(Link);

    expect(lastItem).toHaveLength(0);

    wrapper.unmount();
  });

  it('has a rootURL prop', () => {
    const refine = jest.fn();
    const rootLink = 'deringhall.com';

    const wrapper = mount(
      <SearchBreadcrumb
        refine={refine}
        createURL={() => '#'}
        canRefine
        rootURL={rootLink}
        items={[
          {
            value: 'white',
            label: 'white'
          },
          {
            value: 'white > white1',
            label: 'white1'
          },
          {
            value: 'white > white1 > white1.1',
            label: 'white1.1'
          }
        ]}
      />
    );

    const breadcrumb = wrapper.find('ul');

    expect(breadcrumb.children()).toHaveLength(4);

    breadcrumb
      .children()
      .first()
      .find(Link)
      .simulate('click');
    expect(refine.mock.calls).toHaveLength(0);
    expect(
      wrapper
        .find('a')
        .first()
        .prop('href')
    ).toEqual('deringhall.com');

    wrapper.unmount();
  });

  it('has a separator prop that can be a custom component', () => {
    const wrapper = shallow(
      <SearchBreadcrumb
        refine={() => null}
        createURL={() => '#'}
        canRefine
        separator={<span role="img" aria-label="separator">🔍</span>}
        items={[
          {
            value: 'white',
            label: 'white'
          },
          {
            value: 'white > white1',
            label: 'white1'
          },
          {
            value: 'white > white1 > white1.1',
            label: 'white1.1'
          }
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
