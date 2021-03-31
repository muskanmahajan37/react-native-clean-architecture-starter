module.exports = {
  plugins: [
    ["babel-plugin-transform-typescript-metadata"],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "^\\/(.+)": "./src/\\1",
        },
      },
    ],
  ],
  presets: ["module:metro-react-native-babel-preset"],
}
