#!/usr/bin/env bash

# CLI commands to setup the React 16.3 project.
# Author: Andrew Jarombek
# Date: 11/14/2019

# Initial app creation
npx --version
npx create-react-app react16-3

# Global NPM setup
node -v
nvm ls
nvm use v10.15.3
npm install webpack-dev-server --global

# Ensure that only one version of react and react-dom is installed
npm ls react-dom
npm ls react

# Installing dependencies
cd react16-3
yarn
yarn --force

# Building/Running the application with Webpack
yarn build
yarn deploy
yarn start
