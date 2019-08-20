import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export const plugins = [
  resolve({
    browser: true,
    preferBuiltins: true
  }),
  commonjs({
    include: 'node_modules/**',
    // see https://github.com/rollup/rollup/wiki/Troubleshooting#name-is-not-exported-by-module
    namedExports: {
      'node_modules/react-instantsearch/connectors.js': [
        'connectStateResults',
        'connectBreadcrumb',
        'connectAutoComplete',
        'connectInfiniteHits',
        'connectRange',
        'connectHierarchicalMenu',
        'connectRefinementList',
        'connectSortBy',
        'connectCurrentRefinements',
        'connectStats',
        'connectSearchBox'
      ]
    }
  }),
  babel({
    exclude: 'node_modules/**',
    plugins: ['external-helpers']
  })
];

export default [{
  input: 'src/index.js',
  external: [
    'react',
    'react-dom',
    'react-instantsearch',
    'react-image-gallery',
    '@dering-hall/dh-theme'
  ]
},
{
  input: 'src/templates/index.js',
  external: [
    'react',
    'react-dom',
    '@dering-hall/dh-theme'
  ]
},
{
  input: 'src/components/Icons/index.js'
}];
