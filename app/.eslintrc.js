/**
 * Linting configuration for the React 16.3 Project.
 * @author Andrew Jarombek
 * @since 12/30/2019
 */

module.exports = {
    env: {
        browser: true,
        es2020: true,
        jest: true
    },
    extends: [
        'airbnb',
        'plugin:react/recommended'
    ],
    parser: "babel-eslint"
};
