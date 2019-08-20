const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    include: path.resolve(__dirname, '../src'),
    use: [
      require.resolve('style-loader'),
      {
        loader: 'css-loader',
        options: {
          module: false,
          localIdentName: '[path][name]-[local]'
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: (loader) => [require('autoprefixer')()]
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: false,
          includePaths: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules')]
        },
      }
    ],
  });

  defaultConfig.resolve.extensions.push('.scss');

  defaultConfig.plugins.push(new Dotenv());

  return defaultConfig;
};
