import React from 'react';
import { shallow } from 'enzyme';

import PanelCallbackHandler from '../PanelCallbackHandler';

// From: https://github.com/algolia/react-instantsearch/blob/v5.0.1/packages/react-instantsearch/src/components/PanelCallbackHandler.test.js
describe('<PanelCallbackHandler />', () => {
  it('renders correctly', () => {
    const props = {
      canRefine: true
    };

    const wrapper = shallow(
      <PanelCallbackHandler {...props}>
        <div>Hello content</div>
      </PanelCallbackHandler>
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('willMount', () => {
    it('should call setCanRefine when the context is given', () => {
      const props = {
        canRefine: true
      };

      const context = {
        setCanRefine: jest.fn()
      };

      shallow(
        <PanelCallbackHandler {...props}>
          <div>Hello content</div>
        </PanelCallbackHandler>,
        { context }
      );

      expect(context.setCanRefine).toHaveBeenCalledTimes(1);
      expect(context.setCanRefine).toHaveBeenCalledWith(true);
    });

    it('should not throw when the context is not given', () => {
      const props = {
        canRefine: true
      };

      const trigger = () =>
        shallow(
          <PanelCallbackHandler {...props}>
            <div>Hello content</div>
          </PanelCallbackHandler>
        );

      expect(() => trigger()).not.toThrow();
    });
  });

  describe('willReceiveProps', () => {
    it('should call setCanRefine when the context is given', () => {
      const props = {
        canRefine: true
      };

      const context = {
        setCanRefine: jest.fn()
      };

      const wrapper = shallow(
        <PanelCallbackHandler {...props}>
          <div>Hello content</div>
        </PanelCallbackHandler>,
        { context }
      );

      wrapper.setProps({ canRefine: false });

      expect(context.setCanRefine).toHaveBeenCalledTimes(2);
      expect(context.setCanRefine).toHaveBeenLastCalledWith(false);
    });

    it('should not call setCanRefine when the nextProps is the same', () => {
      const props = {
        canRefine: true
      };

      const context = {
        setCanRefine: jest.fn()
      };

      const wrapper = shallow(
        <PanelCallbackHandler {...props}>
          <div>Hello content</div>
        </PanelCallbackHandler>,
        { context }
      );

      wrapper.setProps({ canRefine: true });

      expect(context.setCanRefine).toHaveBeenCalledTimes(1);
    });

    it('should not throw when the context is not given', () => {
      const props = {
        canRefine: true
      };

      const trigger = () => {
        const wrapper = shallow(
          <PanelCallbackHandler {...props}>
            <div>Hello content</div>
          </PanelCallbackHandler>
        );

        wrapper.setProps({ canRefine: false });
      };

      expect(() => trigger()).not.toThrow();
    });
  });
});
