/**
 * Describe the new strict mode component introduced in React 16.3.
 * @author Andrew Jarombek
 * @since 1/26/2020
 */

import React from 'react';
import FeaturePage from './FeaturePage';
import { AJCodeSnippet } from 'jarombek-react-components';
import StrictModeComponent from './strictmode/StrictModeComponent';

const codeSnippet =
`import React from 'react';

const StrictModeComponent = () => {
  return (
    <div className="strict-mode-component">
      <StrictModeChild className="outside-strict-mode"><p>Outside Strict Mode</p></StrictModeChild>
      <React.StrictMode>
        <StrictModeChild className="inside-strict-mode"><p>Inside Strict Mode</p></StrictModeChild>
      </React.StrictMode>
    </div>
  );
};
`;

const childCodeSnippet =
`class StrictModeChild extends React.Component {

  constructor(props) {
    super(props);
  }

  /**
   * Prove that StrictMode will complain about the legacy UNSAFE_componentWillUpdate() method.
   */
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.info('Inside UNSAFE_componentWillUpdate');
  }

  render() {
    return (
      <div className={this.props.className}>{this.props.children}</div>
    )
  }
}

export default StrictModeComponent;
`;

const StrictModeDemo = () => {
    return (
        <FeaturePage>
          <h1>Strict Mode</h1>
          <div className="demo-body">
            <p>
              <code>StrictMode</code> is a new component added in React 16.3.
              <code>StrictMode</code> does not render anything in the DOM, instead displaying
              additional console warnings for unsafe code.  Most of these relate to deprecated
              feature usage<sup>13</sup>.
            </p>
            <p>
              The following component shows how <code>StrictMode</code> can be used.  You can check
              the developer console to see the warnings that are thrown due to strict mode.
            </p>
            <StrictModeComponent />
            <AJCodeSnippet language="javascript">
              {codeSnippet}
            </AJCodeSnippet>
            <AJCodeSnippet>
              {childCodeSnippet}
            </AJCodeSnippet>
          </div>
        </FeaturePage>
    );
};

export default StrictModeDemo;
