module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = { // eslint-disable-line no-param-reassign
        fs: 'empty',
      };
    }

    return config;
  },
};
