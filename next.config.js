module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable error overlays
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== "ReactRefreshWebpackPlugin"
      );
    }
    return config;
  },
};
