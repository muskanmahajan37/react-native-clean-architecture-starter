/* eslint-disable no-undef */
import "reflect-metadata"
import "react-native-gesture-handler/jestSetup"

import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock"

// Fix: You are trying to `import` a file after the Jest environment has been torn down.
jest.useFakeTimers()

// Fix: `useNativeDriver` is not supported because the native animated module is missing.
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")

// Mock the async storage
jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage)
