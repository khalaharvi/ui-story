import React from 'react';
import { shallow } from 'enzyme';

import ProductDetailDescription from '../ProductDetailDescription';

describe('<ProductDetailDescription />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ProductDetailDescription
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quisquam numquam eos, porro illum sapiente molestiae. In voluptas aspernatur consequatur beatae, reiciendis ut quidem voluptatum omnis laudantium? Amet, ut, earum!"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with HTML description', () => {
    const wrapper = shallow(
      <ProductDetailDescription
        description={`
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quaerat adipisci voluptatibus. Tempora quas at quasi quae optio laudantium, modi suscipit quidem atque aliquid earum veritatis voluptatum unde harum, repudiandae!</p>
        `}
      />
    );

    expect(wrapper.render().find('p')).toHaveLength(1);
  });
});
