module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@components": "RNboilerplate/src/components",
          "@navigators": "RNboilerplate/src/navigators",
          "@reducers": "RNboilerplate/src/reducers",
          "@res": "RNboilerplate/src/res",
          "@sagas": "RNboilerplate/src/sagas",
          "@services": "RNboilerplate/src/services",
          "@themes": "RNboilerplate/src/themes",
          "@views": "RNboilerplate/src/views",
          "@store": "RNboilerplate/src/store"
        }
      }
    ]
  ],
  env: {
    production: {
      plugins: ["react-native-paper/babel"]
    }
  }
};
