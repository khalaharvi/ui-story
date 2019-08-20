import { minify } from 'uglify-es';
import uglify from 'rollup-plugin-uglify';

import config, { plugins } from './rollup.config.common';

const prodPlugins = plugins.concat([uglify({}, minify)]);

export default [
  // src/index.js
  Object.assign(config[0], {
    output: {
      file: 'dist/ui-kit.js',
      format: 'cjs'
    },
    plugins: prodPlugins
  }),
  // src/templates/index.js
  Object.assign(config[1], {
    output: {
      file: 'dist/templates.js',
      format: 'cjs'
    },
    plugins: prodPlugins
  }),
  // src/components/Icons/index.js
  Object.assign(config[2], {
    output: {
      file: 'dist/icons.js',
      format: 'cjs'
    },
    plugins: prodPlugins
  })
];
