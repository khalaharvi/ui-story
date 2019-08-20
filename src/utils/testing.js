import { object } from 'prop-types';
import { channel, createBroadcast } from 'emotion-theming';
import { shallow, mount } from 'enzyme';
import theme from '@dering-hall/dh-theme';

const getOptions = (options = {}) => {
  const broadcast = createBroadcast(theme);

  return {
    context: {
      [channel]: broadcast
    },
    childContextTypes: {
      [channel]: object
    },
    ...options
  };
};

export const mountWithTheme = (
  Component,
  options = {}
) => mount(Component, { ...getOptions(options) });

export const shallowWithTheme = (
  Component,
  options = {}
) => shallow(Component, { ...getOptions(options) });

export default {
  mountWithTheme,
  shallowWithTheme
};
