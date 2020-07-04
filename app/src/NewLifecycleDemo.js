/**
 * Describe the new lifecycle methods introduced in React 16.3.
 * @author Andrew Jarombek
 * @since 1/17/2020
 */

import React from 'react';
import FeaturePage from './FeaturePage';
import { AJCodeSnippet } from 'jarombek-react-components';
import DerivedFromPropsWrapper from './newlifecycle/DerivedFromPropsWrapper';
import SnapshotBeforeUpdate from './newlifecycle/SnapshotBeforeUpdate';

const derivedFromPropsWrapperCodeSnippet =
`import React, { useState } from 'react';
import DerivedFromProps from './DerivedFromProps';
import { AJContainedButton } from 'jarombek-react-components';

const DerivedFromPropsWrapper = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="derived-from-props-wrapper">
      <p><code>getDerivedStateFromProps()</code> Demonstration</p>
      <AJContainedButton onClick={() => setShow(!show)}>
        {show ? 'Show Secret Message' : 'Hide Secret Message'}
      </AJContainedButton>
      <DerivedFromProps show={show}/>
    </div>
  );
};
`;

const derivedFromPropsCodeSnippet =
`import React from 'react';
import PropTypes from 'prop-types';

class DerivedFromProps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      secretCode: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    // Assert that this lifecycle method does not have access to the component instance.
    console.assert(this === undefined);

    if (props.show) {
      return { secretCode: 1231 };
    } else {
      return { secretCode: 0 };
    }
  }

  render() {
    return (
      <div className="derived-from-props">
        { this.state.secretCode === 1231 ?
          <p className="secret-code">
            You have a beautiful heart.
          </p>
          :
          <div className="secret-code-classified">
            <p>CLASSIFIED</p>
          </div>
        }
      </div>
    )
  }
}

DerivedFromProps.propTypes = {
  show: PropTypes.bool.isRequired
};
`;

const derivedFromPropsRefactoredCodeSnippet =
`import React from 'react';
import PropTypes from 'prop-types';

const DerivedFromPropsRefactored = ({show}) => {
  return (
    <div className="derived-from-props">
      { show ?
        <p className="secret-code">
          You have a beautiful heart.
        </p>
        :
        <div className="secret-code-classified">
          <p>CLASSIFIED</p>
        </div>
      }
    </div>
  )
};

DerivedFromPropsRefactored.propTypes = {
  show: PropTypes.bool.isRequired
};
`;

const getSnapshotBeforeUpdateCodeSnippet =
`import React, {createRef} from 'react';

class SnapshotBeforeUpdate extends React.Component {

  constructor(props) {
    super(props);

    this.colors = [
      'aqua', 'aquamarine', 'lightskyblue'
    ];

    this.buttonRef = createRef();
    this.state = {
      clicks: 0,
      prevColor: 'none'
    };
  }

  onButtonClick() {
    this.setState({clicks: this.state.clicks + 1})
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return {
      color: this.buttonRef.current.style.backgroundColor
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null && snapshot.color !== this.buttonRef.current.style.backgroundColor) {
      this.setState({
        prevColor: snapshot.color
      });
    }
  }

  render() {
    return (
      <div className="snapshot-before-update">
        <button
          ref={this.buttonRef}
          onClick={() => this.onButtonClick()}
          style={{backgroundColor: this.colors[this.state.clicks % 3]}}>

          {this.colors[this.state.clicks % 3].toUpperCase()}
        </button>
        <p>Previous Color: <strong>{this.state.prevColor}</strong></p>
      </div>
    )
  }
}
`;

const NewLifecycleDemo = () => {
  return (
    <FeaturePage>
      <h1>New Lifecycle Methods</h1>
      <div className="demo-body">
        <p>
          Last year I wrote an article about <a
          href="https://jarombek.com/blog/jan-19-2019-react-lifecycles">lifecycle
          methods in React</a>. It turns out my article was outdated upon arrival, since the
          React team began a multi-year process of deprecating existing lifecycles and adding
          new ones. In React 16.3, two new lifecycle methods were introduced -
          <code>getDerivedStateFromProps()</code> and <code>getSnapshotBeforeUpdate()</code>.
        </p>
        <p>
          It was also announced that three lifecycle methods will be slowly phased out over the
          coming releases. In React 17 (still not released at the time I'm writing this - Jan.
          31th, 2020) <code>componentWillMount</code>, <code>componentWillReceiveProps</code>,
          and <code>componentWillUpdate</code> will be removed. Legacy code can simply rename
          these methods to <code>UNSAFE_componentWillMount</code>,
          <code>UNSAFE_componentWillReceiveProps</code>, and
          <code>UNSAFE_componentWillUpdate</code> instead of being refactored. These
          <code>UNSAFE</code> prefixed methods were introduced in React 16.3 in case developers
          want to rename existing methods before React 17 is released.
        </p>
        <p>
          In my opinion there were some confusing aspects to some of these deprecated lifecycle
          methods. For example, <code>componentWillMount()</code> is invoked before
          <code>componentDidMount()</code>. However, API calls should occur in
          <code>componentDidMount()</code>, going against conventional logic that API calls
          should be initialized as soon as possible<sup>8</sup>. Hopefully removing these
          lifecycle methods will help simplify things.
        </p>
        <p>
          Once React 17 is released, the class component lifecycles will be:
        </p>
        <p>
          <code className="code-listing">constructor()</code> (Included although technically not
          a lifecycle method)
        </p>
        <p>
          <code className="code-listing">getDerivedStateFromProps(props, state)</code>
        </p>
        <p>
          <code className="code-listing">render()</code>
        </p>
        <p>
          <code className="code-listing">componentDidMount()</code>
        </p>
        <p>
          <code className="code-listing">shouldComponentUpdate()</code>
        </p>
        <p>
          <code className="code-listing">getSnapshotBeforeUpdate(prevProps, prevState)</code>
        </p>
        <p>
          <code className="code-listing">
            componentDidUpdate(prevProps, prevState, snapshot)
          </code>
        </p>
        <p>
          <code className="code-listing">componentWillUnmount()</code>
        </p>
        <p>
          <code className="code-listing">getDerivedStateFromError(error)</code>
        </p>
        <p>
          <code className="code-listing">componentDidCatch(error, info)</code>
        </p>
        <p>
          Note that <code>componentDidCatch()</code> was released in React 16.0 and
          <code>getDerivedStateFromError()</code> in React 16.6. Let's take a look at
          <code>getDerivedStateFromProps()</code> and <code>getSnapshotBeforeUpdate()</code>
          specifically since they were released with React 16.3.
        </p>
        <h2 className="code-header"><code>getDerivedStateFromProps()</code></h2>
        <p>
          <code>getDerivedStateFromProps()</code> replaces the soon to be deprecated
          <code>componentWillReceiveProps()</code> lifecycle method. The main difference
          between the two is that <code>componentWillReceiveProps()</code> allows for side
          effects while <code>getDerivedStateFromProps()</code> does not<sup>9</sup>. What this
          means is that <code>getDerivedStateFromProps()</code> does not have access to the
          component instance while <code>componentWillReceiveProps()</code> does<sup>10</sup>.
          This is due to <code>getDerivedStateFromProps()</code> being a static method. The
          React team made this change because providing developers access to the component
          instance in <code>componentWillReceiveProps()</code> led to code that didn't match the
          lifecycle methods intended use.
        </p>
        <p>
          <code>getDerivedStateFromProps()</code> is invoked before a component renders. Based
          on the methods name, its main purpose is to update the state, which is derived from
          the props.
        </p>
        <p>
          <code>getDerivedStateFromProps()</code> is called during the initial component render and
          each subsequent re-render.  It takes two arguments, the state and props of the component.
          It returns either an object with properties to update the component state or
          <code>null</code> if the component state should remain unchanged.
        </p>
        <p>
          The following example consists of two components -
          <code>DerivedFromPropsWrapper</code> and <code>DerivedFromProps</code>.  The purpose of
          <code>DerivedFromPropsWrapper</code> is to pass a prop down to
          <code>DerivedFromProps</code>.  The <code>DerivedFromProps</code> component has a
          <code>secretCode</code> state property which is derived from its boolean
          <code>show</code> prop.
        </p>
        <AJCodeSnippet language="javascript">
          {derivedFromPropsWrapperCodeSnippet}
        </AJCodeSnippet>
        <AJCodeSnippet language="javascript">
          {derivedFromPropsCodeSnippet}
        </AJCodeSnippet>
        <p>
          Here are the rendered components:
        </p>
        <DerivedFromPropsWrapper/>
        <p>
          Although this example helps demonstrate the basic functionality of
          <code>getDerivedStateFromProps()</code>, in production code <code>DerivedFromProps</code>
          should be refactored to be a stateless component.  Here is the code for
          <code>DerivedFromProps</code> after proper refactoring:
        </p>
        <AJCodeSnippet language="javascript">
          {derivedFromPropsRefactoredCodeSnippet}
        </AJCodeSnippet>
        <h2 className="code-header"><code>getSnapshotBeforeUpdate()</code></h2>
        <p>
          <code>getSnapshotBeforeUpdate()</code> is a new lifecycle method used in conjunction with
          <code>componentDidUpdate()</code>.  A combination of the two can be used as a replacement
          for the deprecated <code>componentWillUpdate()</code> method.
        </p>
        <p>
          <code>getSnapshotBeforeUpdate()</code> and <code>componentDidUpdate()</code> are both
          invoked right after <code>render()</code> executes.  However,
          <code>getSnapshotBeforeUpdate()</code> is invoked before changes to the virtual DOM are
          committed to the DOM<sup>11</sup>.  On the other hand, <code>componentDidUpdate()</code>
          is invoked after changes to the virtual DOM are reflected in the DOM.
        </p>
        <p>
          The return value of <code>getSnapshotBeforeUpdate()</code> is passed to the
          <code>snapshot</code> parameter in <code>componentDidUpdate()</code>.  The typical use
          case of <code>getSnapshotBeforeUpdate()</code> is to extract information from the DOM API
          before DOM changes take place and pass that information along to the moment after DOM
          changes occur.  I'm honestly still trying to think of scenarios where this would be
          useful.  The React blog uses a chat application as an example, and most other online
          sources simply copy and rephrase it<sup>12</sup>.
        </p>
        <p>
          The example of <code>getSnapshotBeforeUpdate()</code> shown below isn't useful as a real
          world scenario, however it does show the different moving pieces in the lifecycle method.
        </p>
        <SnapshotBeforeUpdate/>
        <AJCodeSnippet language="javascript">
          {getSnapshotBeforeUpdateCodeSnippet}
        </AJCodeSnippet>
      </div>
    </FeaturePage>
  );
};

export default NewLifecycleDemo;
