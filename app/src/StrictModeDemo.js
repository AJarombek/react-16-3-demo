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
`

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
              The following component shows how <code>StrictMode</code> can be used:
            </p>
            <StrictModeComponent />
            <AJCodeSnippet language="javascript">
              {codeSnippet}
            </AJCodeSnippet>
          </div>
        </FeaturePage>
    );
};

export default StrictModeDemo;
