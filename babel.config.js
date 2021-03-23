module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [".ts", ".tsx"],
        alias: {
          "^\\/(.+)": "./src/\\1",
        },
      },
    ],
  ],
  presets: ["module:metro-react-native-babel-preset"],
}
