module.exports = {
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [".ts", ".tsx"],
        alias: {
          "^@(.+)": "./src/\\1",
        },
      },
    ],
  ],
  presets: ["module:metro-react-native-babel-preset"],
}
