import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../Panel';

// Adapted from: https://github.com/algolia/react-instantsearch/blob/v5.0.1/packages/react-instantsearch/src/components/Panel.test.js
describe('<Panel />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Panel header="Panel Header">
        <div>This is the panel body.</div>
      </Panel>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with className', () => {
    const wrapper = shallow(
      <Panel header="Panel Header" className="custom-panel">
        <div>This is the panel body.</div>
      </Panel>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with headerAction', () => {
    const wrapper = shallow(
      <Panel header="Panel Header" headerAction={<button>Click Me</button>}>
        <div>This is the panel body.</div>
      </Panel>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly without refinement', () => {
    const wrapper = shallow(
      <Panel header="Panel Header">
        <div>This is the panel body.</div>
      </Panel>
    );

    wrapper.setState({ canRefine: false });

    expect(wrapper).toMatchSnapshot();
  });

  it('should expose context to his children', () => {
    const wrapper = shallow(
      <Panel header="Panel Header">
        <div>This is the panel body.</div>
      </Panel>
    );

    expect(wrapper.instance().getChildContext()).toEqual({
      setCanRefine: wrapper.instance().setCanRefine
    });
  });

  it('renders correctly when setCanRefine is called', () => {
    const wrapper = shallow(
      <Panel header="Panel Header">
        <div>This is the panel body.</div>
      </Panel>
    );

    expect(wrapper.state('canRefine')).toBe(true);
    expect(wrapper).toMatchSnapshot();

    // Simulate context call
    wrapper
      .instance()
      .getChildContext()
      .setCanRefine(false);

    wrapper.update();

    expect(wrapper.state('canRefine')).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });
});
