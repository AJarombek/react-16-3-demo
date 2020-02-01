# Dockerfile for the react-16-3-demo application
# Author: Andrew Jarombek
# Date: 1/26/2020

FROM node:13-alpine AS base

COPY /app/src /src
WORKDIR /src

RUN npm install yarn -g
RUN yarn --force
RUN yarn build

FROM node:13-alpine AS app

LABEL maintainer="andrew@jarombek.com" \
      version="1.0.0" \
      description="Dockerfile for a React 16.3 new feature demo application."

COPY --from=base /src/dist/ /dist
WORKDIR /dist

EXPOSE 8080
ENTRYPOINT ["node", "app.js"]
