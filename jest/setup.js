import "react-native-gesture-handler/jestSetup"; // tests wont run without these

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock');

//   // The mock for `call` immediately calls the callback which is incorrect
//   // So we override it with a no-op
//   Reanimated.default.call = () => {};

//   return Reanimated;
// });
