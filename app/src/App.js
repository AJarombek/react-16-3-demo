/**
 * Main application component for the React 16.3 demo.  Contains a bunch of cards that can be
 * selected to learn more about a React 16.3 feature.
 * @author Andrew Jarombek
 * @since 11/14/2019
 */

import { hot } from 'react-hot-loader/root';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { AJTextCard, AJResponsiveGrid } from 'jarombek-react-components';

const App = () => {
  const history = useHistory();

  const contextNote =
    <>
      In React 16.3, the Context API was rewritten. Context allows data to be shared amongst
      components without passing it via props from parents to children<sup>1</sup>. While I'm
      still learning which scenarios are appropriate for the context API, the React blog
      recommends to use it for "global" data used by a tree of React components<sup>2</sup>.
    </>;

  const createRefNote =
    <>
      Refs are a feature I've known about and used since I first learned React.  Refs provide a way
      to access a DOM node and use the DOM API.  React is well known for its virtual DOM, a layer of
      abstraction on top of the DOM.  Usually we interact with the virtual DOM in a declarative
      way, however Refs allow us to write traditional imperative DOM API code.  React 16.3
      introduced a new way to create Refs with the <code>createRef()</code> method.
    </>;

  const forwardRefNote =
    <>
      Ref Forwarding is when refs are passed through a component to a React element.
      Passing refs through props does not work, so special logic is needed.  If you try to
      pass a ref as a prop, it will be bound to the component instead of the underlying DOM node.
      React 16.3 introduced ref forwarding, which allows refs to be forwarded through a component to
      an underlying DOM node.
    </>;

  const newLifecyclesNote =
    <>
      Last year I wrote an article about <a
      href="https://jarombek.com/blog/jan-19-2019-react-lifecycles">lifecycle methods in
      React</a>.  It turns out my article was outdated upon arrival, since the React team began a
      multi-year process of deprecating existing lifecycles and adding new ones.  In React 16.3, two
      new lifecycle methods were introduced - <code>getDerivedStateFromProps()</code> and
      <code>getSnapshotBeforeUpdate()</code>.
    </>;

  return (
    <div className="App">
      <h1>React 16.3</h1>
      <p>Release Date: March 29, 2018</p>
      <AJResponsiveGrid
        smallBreakpoint="500px"
        mediumBreakpoint="900px"
        largeBreakpoint="1200px"
        items={[
          <AJTextCard
            key="context"
            title="Context"
            content={contextNote}
            action={() => history.push('/context')}
            actionText="Learn More"
          />,
          <AJTextCard
            key="create-ref"
            title="Create Ref"
            content={createRefNote}
            action={() => history.push('/create-ref')}
            actionText="Learn More"
          />,
          <AJTextCard
            key="forward-ref"
            title="Forward Ref"
            content={forwardRefNote}
            action={() => history.push('/forward-ref')}
            actionText="Learn More"
          />,
          <AJTextCard
            key="new-lifecycle"
            title="New Lifecycle"
            content={newLifecyclesNote}
            action={() => history.push('/new-lifecycle')}
            actionText="Learn More"
          />,
          <AJTextCard
            key="strict-mode"
            title="Strict Mode"
            content={<>...</>}
            action={() => history.push('/strict-mode')}
            actionText="Learn More"
          />
        ]}
      />
    </div>
  );
};

export default hot(App);
