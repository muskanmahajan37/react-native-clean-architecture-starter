module.exports = {
  bail: true,
  preset: "react-native",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(" +
      "@react-native-community" +
      "|@react-navigation" +
      "|@react-native" +
      "|react-native" +
      "|react-native-gesture-handler" +
      "|react-navigation" +
      "|react-navigation-stack" +
      "|react-native-screens" +
      "|react-native-iphone-x-helper" +
      "|react-native-config" +
      ")/)",
  ],
  setupFiles: ["./jest.setup.js"],
}
