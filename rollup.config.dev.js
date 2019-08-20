import config, { plugins } from './rollup.config.common';

export default [
  // src/index.js
  Object.assign(config[0], {
    output: {
      file: 'dist/ui-kit.dev.js',
      format: 'cjs'
    },
    plugins
  }),
  // src/templates/index.js
  Object.assign(config[1], {
    output: {
      file: 'dist/templates.dev.js',
      format: 'cjs'
    },
    plugins
  }),
  // src/components/Icons/index.js
  Object.assign(config[2], {
    output: {
      file: 'dist/icons.js',
      format: 'cjs'
    },
    plugins
  })
];
