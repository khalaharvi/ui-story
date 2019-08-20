import React from 'react';
import { shallow } from 'enzyme';

import ErrorComponent from '../Error';

describe('<ErrorComponent />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ErrorComponent
        logo={<img src="http://placehold.it/150x30" alt="" />}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with custom className', () => {
    const wrapper = shallow(
      <ErrorComponent
        className="custom-classname"
        logo={<img src="http://placehold.it/150x30" alt="" />}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with link', () => {
    const wrapper = shallow(
      <ErrorComponent
        logo={<img src="http://placehold.it/150x30" alt="" />}
        link={<a href="/">Back to Homepage</a>}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with custom title', () => {
    const wrapper = shallow(
      <ErrorComponent
        logo={<img src="http://placehold.it/150x30" alt="" />}
        title="Custom Title"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with custom message', () => {
    const wrapper = shallow(
      <ErrorComponent
        logo={<img src="http://placehold.it/150x30" alt="" />}
        message="Custom Message"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with copyright', () => {
    const wrapper = shallow(
      <ErrorComponent
        logo={<img src="http://placehold.it/150x30" alt="" />}
        copyright="Custom Copyright, LLC"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
