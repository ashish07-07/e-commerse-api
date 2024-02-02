// module.exports = {
//   testEnvironment: "node",
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// };
// module.exports = {
//   testEnvironment: "node",
//   testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.js$",
//   moduleFileExtensions: ["js", "json", "node"],
// };
// {
//     "testEnvironment": "node",
//     "testRegex": "(/tests/.*|(\\.|/)(test|spec))\\.js$",
//     "moduleFileExtensions": ["js", "json", "node"],
//     "transform": {
//       "^.+\\.jsx?$": "babel-jest"
//     }
//   }

// {
//     "testEnvironment": "node",
//     "testRegex": "(/tests/.*|(\\.|/)(test|spec))\\.js$",
//     "moduleFileExtensions": ["js", "json", "node"],
//     "transform": {
//       "^.+\\.jsx?$": "babel-jest"
//     }
//   }
// module.exports = {
//   testEnvironment: "node",
//   testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.js$",
//   moduleFileExtensions: ["js", "json", "node"],
//   transform: {
//     "^.+\\.jsx?$": "babel-jest",
//   },
// };
// jest.config.js
module.exports = {
  testEnvironment: "node",
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.js$",
  moduleFileExtensions: ["js", "json", "node"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
