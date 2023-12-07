# react-16-3-demo

![Maintained Label](https://img.shields.io/badge/Maintained-No-red?style=for-the-badge)
![Deprecated Label](https://img.shields.io/badge/Deprecated-Yes-lightgray?style=for-the-badge)
![Archived Label](https://img.shields.io/badge/Archived-Yes-lightgray?style=for-the-badge)

> Code Migrated to [andy-jarombek-research](https://github.com/AJarombek/andy-jarombek-research)

### Overview

Demo application for the new features introduced in React 16.3.

### Commands

**Start the application locally**

```bash
cd app && yarn start
```

**Unit/Integration/Snapshot Test the application locally**

```bash
cd app && yarn test
```

### CI/CD

There is a single Jenkins job for this application:

- [`react-16-3-demo-test`](http://jenkins.jarombek.io/job/prototypes/job/react-16-3-demo-test/) Runs 
unit tests, integration tests, and snapshot tests daily.

### Files

| Filename                 | Description                                                                |
|--------------------------|----------------------------------------------------------------------------|
| `app`                    | React application code showcasing React 16.3.                              |
| `Dockerfile`             | Dockerfile as an alternative method to building the production app.        |
| `setup.sh`               | Bash commands to set up and start the application.                         |
