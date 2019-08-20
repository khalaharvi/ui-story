import React from 'react';
import { shallow } from 'enzyme';

import SellerProfileNews from '../SellerProfileNews';

const news = [
  {
    id: 1,
    image: 'https://cdn.deringhall.com/announcement/image/aa327cae-518b-489a-bf6b-ff1c040c5fa0_elle.decor.jpg?auto=format&fit=max&q=60&w=670',
    title: 'Elle Decor',
    type: 'Announcement'
  },
  {
    id: 2,
    image: 'https://cdn.deringhall.com/images/2302/original/image.jpg?auto=format&fit=max&q=60&w=670',
    title: 'Architectural Digest',
    type: 'Announcement'
  },
  {
    id: 3,
    image: 'https://cdn.deringhall.com/images/718/original/cover.jpg?auto=format&fit=max&q=60&w=670',
    title: 'Shining Through',
    type: 'Press'
  },
  {
    id: 4,
    image: 'https://cdn.deringhall.com/images/681/original/cover.jpg?auto=format&fit=max&q=60&w=670',
    title: 'Remote Possibilities',
    type: 'Press'
  }
];

describe('<SellerProfileNews />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SellerProfileNews news={news} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with newsComponent', () => {
    const wrapper = shallow(
      <SellerProfileNews
        news={news}
        newsComponent={({ news: n }) => <p>{n.title}</p>}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
