module.exports = {
  bail: true,
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "json", "node"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  setupFiles: ["./jest.setup.js"],
}
