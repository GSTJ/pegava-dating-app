module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "babel-plugin-styled-components",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "~graphql": "./src/graphql",
            "~components": "./src/components",
            "~validations": "./src/validations",
            "~constants": "./src/constants",
            "~themes": "./src/themes",
            "~store": "./src/store",
            "~reducers": "./src/store/reducers",
            "~views": "./src/views",
            "~services": "./src/services",
            "~assets": "./src/assets",
            "~images": "./src/assets/images",
            "~animations": "./src/assets/animations",
            "~config": "./src/config",
            "~src": "./src",
          },
        },
      ],
    ],
  };
};
