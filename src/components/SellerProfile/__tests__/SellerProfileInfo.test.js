import React from 'react';
import { mount, shallow } from 'enzyme';

import SellerProfileInfo from '../SellerProfileInfo';
import { cx } from '../SellerProfile';

const seller = {
  name: 'Catlin Design',
  location: 'Jacksonville, CA',
  image: 'https://cdn.deringhall.com/seller/primary_image/03dd84b2-2f99-40e3-9013-8158f4f1f542_riverbirch.00092..hdr.jpg?auto=format&fit=max&h=531&q=60&w=1170',
  logo: 'https://cdn.deringhall.com/user/logo/bb82f493-9f8a-4df2-81db-068e357dc20b_miyuki.logo.color.transparent.web.png?auto=format&fit=max&h=170&q=60&w=170',
  website: 'https://encrypted.google.com',
  summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi veritatis reiciendis itaque, vel iusto suscipit, illo in accusantium nulla dignissimos est mollitia ea eius dolores laborum libero aut, corporis ipsam.'
};

const links = [
  {
    type: 'website',
    url: 'https://deringhall.com',
    label: 'Official Website'
  },
  {
    type: 'facebook',
    url: 'https://facebook.com'
  }
];

describe('<SellerProfileInfo />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SellerProfileInfo seller={seller} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with HTML summary', () => {
    const summarySelector = cx('info-summary');
    const sellerWithHTMLSummary = Object.assign({}, seller, {
      summary: `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi veritatis reiciendis itaque, vel iusto suscipit, illo in accusantium nulla dignissimos est mollitia ea eius dolores laborum libero aut, corporis ipsam.</p>
      `
    });
    const wrapper = shallow(
      <SellerProfileInfo seller={sellerWithHTMLSummary} links={links} />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.render().find(`.${summarySelector} p`)).toHaveLength(1);
  });

  it('should have a contact button when provided with \'links\' prop', () => {
    const linksWithContact = [...links, {
      type: 'contact',
      url: 'https://deringhall.com'
    }];
    const wrapper = mount(
      <SellerProfileInfo seller={seller} links={linksWithContact} />
    );

    const link = wrapper.find('a.dh-btn');
    expect(link).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });

  it("shouldn't render 'contact' link in social links", () => {
    const linksSelector = cx('info-social-links');
    const linksWithContact = [...links, {
      type: 'contact',
      url: 'https://deringhall.com'
    }];
    const wrapper = mount(
      <SellerProfileInfo seller={seller} links={linksWithContact} />
    );

    const lis = wrapper.find(`.${linksSelector} li`);
    expect(lis).toHaveLength(2);

    wrapper.unmount();
  });
});
