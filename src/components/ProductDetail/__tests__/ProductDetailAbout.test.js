import React from 'react';
import { shallow } from 'enzyme';

import ProductDetailAbout from '../ProductDetailAbout';

describe('<ProductDetailAbout />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ProductDetailAbout
        name="Seller Name"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with image', () => {
    const wrapper = shallow(
      <ProductDetailAbout
        name="Seller Name"
        image="https://placehold.it/370x150"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with description', () => {
    const wrapper = shallow(
      <ProductDetailAbout
        name="Seller Name"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus delectus autem deserunt blanditiis nam commodi nobis quidem ullam, laboriosam rerum debitis quo reprehenderit error aperiam dolore sapiente molestias atque cupiditate."
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with HTML description', () => {
    const wrapper = shallow(
      <ProductDetailAbout
        name="Seller Name"
        description={`
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quaerat adipisci voluptatibus. Tempora quas at quasi quae optio laudantium, modi suscipit quidem atque aliquid earum veritatis voluptatum unde harum, repudiandae!</p>
        `}
      />
    );

    expect(wrapper.render().find('p')).toHaveLength(1);
  });

  it('renders correctly with description and image', () => {
    const wrapper = shallow(
      <ProductDetailAbout
        name="Seller Name"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus delectus autem deserunt blanditiis nam commodi nobis quidem ullam, laboriosam rerum debitis quo reprehenderit error aperiam dolore sapiente molestias atque cupiditate."
        image="https://placehold.it/370x150"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
