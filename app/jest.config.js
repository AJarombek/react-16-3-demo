/**
 * Setup Jest for React 16.3 unit tests.
 * @author Andrew Jarombek
 * @since 12/30/2019
 */

module.exports = {
    displayName: "components",
    testEnvironment: "jsdom",
    testMatch: ["**/test/**/*.test.js"],
    setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
    maxConcurrency: 5,
    transform: {
        "^.+\\.js$": "babel-jest"
    },
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.js"],
    coveragePathIgnorePatterns: [],
    coverageThreshold: {
        "global": {
            "branches": 100,
            "functions": 100,
            "lines": 100,
            "statements": 100
        }
    },
};
