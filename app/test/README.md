### Overview

Jest configuration and tests for components in the `app/src` directory.  This directory includes unit tests, integration
tests, and snapshot tests.

### Files

**Jest Configuration**

| Filename                 | Description                                                                |
|--------------------------|----------------------------------------------------------------------------|
| `mocks`                  | Jest mocks for non-JS files imported into component files.                 |
| `setupTests.js`          | Enzyme configuration with Jest and React 16.                               |

**Unit/Integration Tests**

| Filename                 | Description                                                                |
|--------------------------|----------------------------------------------------------------------------|
| `App.test.js`            | Unit and integration tests for the `App` component.                        |
| `FeaturePage.test.js`    | Unit and integration tests for the `FeaturePage` component.                |
| `ScrollToTop.test.js`    | Unit and integration tests for the `ScrollToTop` component.                |

**Snapshot Tests**

| Filename                        | Description                                                                |
|---------------------------------|----------------------------------------------------------------------------|
| `ContextDemo.snap.test.js`      | Snapshot tests for the `ContextDemo` component.                            |
| `CreateRefDemo.snap.test.js`    | Snapshot tests for the `CreateRefDemo` component.                          |
| `FeaturePage.snap.test.js`      | Snapshot tests for the `FeaturePage` component.                            |
| `ForwardRefDemo.snap.test.js`   | Snapshot tests for the `ForwardRefDemo` component.                         |
| `NewLifecycleDemo.snap.test.js` | Snapshot tests for the `NewLifecycleDemo` component.                       |
| `StrictModeDemo.snap.test.js`   | Snapshot tests for the `StrictModeDemo` component.                         |

**Test Subdirectories**

| Filename           | Description                                                                |
|--------------------|----------------------------------------------------------------------------|
| `context`          | Tests for components used in the Context API demo.                         |
| `createref`        | Tests for components used in the `createRef()` demo.                       |
| `forwardref`       | Tests for components used in the `forwardRef()` demo.                      |
| `newlifecycle`     | Tests for components used in the new/deprecated lifecycle demo.            |
| `strictmode`       | Tests for components used in the `StrictMode` component demo.              |

### Resources

1) [React Router ScrollToTop Unit Testing](https://medium.com/@hello_21915/testing-the-scrolltotop-component-in-react-with-enzyme-and-jest-5342fab570b4)
2) [React useEffect Unit Testing](https://blog.carbonfive.com/2019/08/05/shallow-testing-hooks-with-enzyme/)
