const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      root: path.resolve(__dirname, '.'),
      '@': path.resolve(__dirname, './src'),
    },
  },
};
