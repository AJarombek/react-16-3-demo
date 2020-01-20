/**
 * Describe the forwardRef API introduced in React 16.3.
 * @author Andrew Jarombek
 * @since 1/15/2020
 */

import React from 'react';
import FeaturePage from './FeaturePage';
import ForwardRefSample from './forwardref/ForwardRefSample';
import { AJCodeSnippet } from 'jarombek-react-components';

const noForwardRefsCodeSnippet =
`const ButtonWrapper = (props) => {
  const {children, onClick, ref} = props;

  return (
    <button className="button-wrapper" type="button" onClick={onClick} ref={ref}>
      {children}
    </button>
  );
};
`;

const forwardRefsCodeSnippet =
`const ButtonWrapper = forwardRef((props, ref) => {
  const {children, onClick} = props;

  return (
    <button className="button-wrapper" type="button" onClick={onClick} ref={ref}>
      {children}
    </button>
  );
});
`;

const ForwardRefDemo = () => {
  return (
    <FeaturePage>
      <h1>ForwardRef API</h1>
      <div className="demo-body">
        <p>
          Ref Forwarding is when refs are passed through a component to a React element.
          Passing refs through props does not work, so special logic is needed.  If
          you try to pass a ref as a prop, it is bound to the component instead of the
          underlying DOM node.  For functional components, the ref will equal <code>null</code>
          <sup>7</sup>.
        </p>
        <p>
          React 16.3 introduced ref forwarding, which allows refs to be forwarded through a
          component to an underlying DOM node.  Forward refs are declared with the
          <code>forwardRef()</code> method on the component that performs the forwarding.
        </p>
        <p>
          The following example demonstrates two components which are wrappers around
          <code>&lt;button&gt;</code> elements.  One uses ref forwarding and one doesn't.
          Clicking on the buttons will display the value of the ref on the screen.  Ref values are
          also printed to the console in the browser's developer tools.
        </p>
        <ForwardRefSample />
        <p>
          Here's the code for the button without ref forwarding:
        </p>
        <AJCodeSnippet language="javascript">
          {noForwardRefsCodeSnippet}
        </AJCodeSnippet>
        <p>
          Here's the code for the button with ref forwarding:
        </p>
        <AJCodeSnippet language="javascript">
          {forwardRefsCodeSnippet}
        </AJCodeSnippet>
        <p>
          To implement forward ref passing, the component definition needs to be wrapped in the
          <code>forwardRef()</code> function as shown above.
        </p>
      </div>
    </FeaturePage>
  );
};

export default ForwardRefDemo;
