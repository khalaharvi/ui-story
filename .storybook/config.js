import '@storybook/addon-console';
import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

const reqMain = require.context('../stories', true, /\.stories\.js$/);
const reqLib = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  require('../stories');
  reqMain.keys().forEach(filename => reqMain(filename));
  reqLib.keys().forEach(filename => reqLib(filename));
}

configure(loadStories, module);
