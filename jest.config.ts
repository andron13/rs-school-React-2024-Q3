module.exports = {
  preset: "ts-jest",
  testRegex: "/(__tests__)/.*\\.test.(ts|tsx|js)$",
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/__mocks__/fileMock.ts",
    ".+\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(t|j)s$": [
      "ts-jest",
      { diagnostics: { ignoreCodes: ["TS151001"] } },
    ],
  },
};
