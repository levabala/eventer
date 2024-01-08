const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    resetCache: true,
};

const defaultConfig = mergeConfig(getDefaultConfig(__dirname), config);

defaultConfig.resolver.resolverMainFields.unshift('sbmodern');

module.exports = defaultConfig;
