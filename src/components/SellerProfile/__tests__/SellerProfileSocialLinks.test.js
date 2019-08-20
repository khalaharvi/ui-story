import React from 'react';
import { mount, shallow } from 'enzyme';

import SellerProfileSocialLinks from '../SellerProfileSocialLinks';

const links = [
  {
    type: 'website',
    url: 'https://deringhall.com',
    label: 'Official Website'
  },
  {
    type: 'facebook',
    url: 'https://facebook.com'
  },
  {
    type: 'twitter',
    url: 'https://twitter.com'
  },
  {
    type: 'pinterest',
    url: 'https://pinterest.com'
  },
  {
    type: 'instagram',
    url: 'https://instagram.com'
  }
];

describe('<SellerProfileSocialLinks />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SellerProfileSocialLinks links={links} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders facebook icon correctly', () => {
    const wrapper = mount(
      <SellerProfileSocialLinks
        links={[{
          type: 'facebook',
          url: 'https://facebook.com'
        }]}
      />
    );

    const link = wrapper.find('a');
    expect(link).toHaveLength(1);
    expect(link.find('Facebook')).toHaveLength(1);

    wrapper.unmount();
  });

  it('renders instagram icon correctly', () => {
    const wrapper = mount(
      <SellerProfileSocialLinks
        links={[{
          type: 'instagram',
          url: 'https://instagram.com'
        }]}
      />
    );

    const link = wrapper.find('a');
    expect(link).toHaveLength(1);
    expect(link.find('Instagram')).toHaveLength(1);

    wrapper.unmount();
  });

  it('renders pinterest icon correctly', () => {
    const wrapper = mount(
      <SellerProfileSocialLinks
        links={[{
          type: 'pinterest',
          url: 'https://pinterest.com'
        }]}
      />
    );

    const link = wrapper.find('a');
    expect(link).toHaveLength(1);
    expect(link.find('Pinterest')).toHaveLength(1);

    wrapper.unmount();
  });

  it('renders twitter icon correctly', () => {
    const wrapper = mount(
      <SellerProfileSocialLinks
        links={[{
          type: 'twitter',
          url: 'https://twitter.com'
        }]}
      />
    );

    const link = wrapper.find('a');
    expect(link).toHaveLength(1);
    expect(link.find('Twitter')).toHaveLength(1);

    wrapper.unmount();
  });

  it('renders new window icon correctly', () => {
    const wrapper = mount(
      <SellerProfileSocialLinks
        links={[{
          type: 'website',
          url: 'https://deringhall.com'
        }]}
      />
    );

    const link = wrapper.find('a');
    expect(link).toHaveLength(1);
    expect(link.find('NewWindow')).toHaveLength(1);

    wrapper.unmount();
  });
});
