/**
 * Describe the context API introduced in React 16.3.
 * @author Andrew Jarombek
 * @since 12/30/2019
 */

import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AJNavTextCircle, AJCodeSnippet } from 'jarombek-react-components';
import FeaturePage from './FeaturePage';
import ThemeWithProps from './context/ThemeWithProps';
import ThemeWithContext from './context/ThemeWithContext';

const themeWithPropsCode =
`// ThemeWithProps.js

import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {AJTextCard, AJSwitchIcon} from 'jarombek-react-components';
import classnames from 'classnames';

import green from './assets/green.png';
import light from './assets/light.png';

const ThemeWithProps = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={classnames("theme-with-props", \`\${theme}-theme-with-props\`)}>
      <AJSwitchIcon
        initialState={true}
        disabled={false}
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        offImageUrl={green}
        onImageUrl={light}
      />
      <ThemeWithPropsCard theme={theme} />
    </div>
  );
};
`;

const themeWithPropsCardCode =
`const ThemeWithPropsCard = ({theme}) => {
  return (
    <div className={classnames('theme-with-props-card', \`$\{theme}-theme-with-props-card\`)}>
      <AJTextCard
        title="Theme implemented with props"
        content="... content ..."
        action={null}
        actionText="Button"
        actionDisabled={false}
      />
    </div>
  );
};
`;

const themeWithContextCode =
`// ThemeWithContext.js

import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AJSwitchIcon, AJTextCard } from 'jarombek-react-components';
import classnames from 'classnames';

import green from './assets/green.png';
import light from './assets/light.png';

const ThemeContext = createContext('light');

const ThemeWithContext = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={classnames("theme-with-context", \`\${theme}-theme-with-context\`)}>
      <ThemeContext.Provider value={theme}>
        <AJSwitchIcon
          initialState={true}
          disabled={false}
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          offImageUrl={green}
          onImageUrl={light}
        />
        <ThemeWithContextCard />
      </ThemeContext.Provider>
    </div>
  );
};
`;

const themeWithContextCardCode =
`const ThemeWithContextCard = () => {
  const context = useContext(ThemeContext);

  return (
    <div className={classnames('theme-with-context-card', \`\${context}-theme-with-context-card\`)}>
      <AJTextCard
        title="Theme implemented with the context API"
        content="... content ..."
        action={null}
        actionText="Button"
        actionDisabled={false}
      />
    </div>
  );
};
`;

const ContextDemo = () => {
  return (
    <FeaturePage>
      <h1>Context API</h1>
      <div className="demo-body">
        <p>
          In React 16.3, the Context API was rewritten. Context allows data to be shared
          amongst components without passing it via props from parents to children<sup>1</sup>.
          While I'm still learning which scenarios are appropriate for the Context API, the React
          blog recommends to use it for "global" data used by a tree of React
          components<sup>2</sup>.
        </p>
        <p>
          One good use case for the Context API is setting the stylistic theme of a web page based
          on a toggleable switch.  All the components on a page should be aware of the theme chosen,
          but ideally it doesn't need to be passed to every component via a prop.
        </p>
        <p>
          First I implemented this scenario using props.
        </p>
        <ThemeWithProps />
        <p>
          Next I implemented the same component with the Context API.
        </p>
        <ThemeWithContext />
        <p>
          Both components are functionally equivalent.  To identify the differences between the two
          components, let's take a look at the the code.  First, here is the code for a theme
          configured with props:
        </p>
        <AJCodeSnippet language="javascript">
          {themeWithPropsCode}
        </AJCodeSnippet>
        <AJCodeSnippet>
          {themeWithPropsCardCode}
        </AJCodeSnippet>
        <p>
          Next, here is the code for a theme configured with the Context API:
        </p>
        <AJCodeSnippet language="javascript">
          {themeWithContextCode}
        </AJCodeSnippet>
        <AJCodeSnippet>
          {themeWithContextCardCode}
        </AJCodeSnippet>
        <p>
          If you want to see the full code, <a href="https://bit.ly/35Mto2s">
          ThemeWithProps.js</a> and <a href="https://bit.ly/2ThDS7q">ThemeWithContext.js</a> are
          available on GitHub.  In these code samples, its important to focus on how the
          <code>theme</code> variable is passed down to the <code>ThemeWithPropsCard</code> and
          <code>ThemeWithContextCard</code> components.
        </p>
        <p>
          <code>ThemeWithPropsCard</code> receives the selected theme via a prop named
          <code>theme</code>.  The parent component explicitly passes the theme to the child
          component.  In this scenario passing the theme to a single child wasn't much of a hassle.
          However, imagine a chain of nested components, all of which must forward the
          <code>theme</code> prop down to <code>ThemeWithPropsCard</code>.  Components in the middle
          of this chain may not even use the <code>theme</code> prop, but need to be aware of it
          because a nested child needs it.
        </p>
        <p>
          Ideally components only contain code that helps them complete their job.  Creating this
          separation of concerns is possible with the Context API.  With the Context API, global
          variables are created and provided for component chains.  Components can consume the
          context if they need their values, or can just ignore them.  In the previous hypothetical
          example I presented, Components in the middle of the chain don't need to be aware of the
          context they exist in.
        </p>
        <p>
          In <strong>ThemeWithContext.js</strong> I created a context by calling
          <code>createContext()</code>, which is a method imported from React<sup>3</sup>.  The
          argument passed to <code>createContext()</code> is the default value of the context when a
          component does not have a context provider above it in the component hierarchy.  In my
          example, the default value of the context is <code>'light'</code>, so by default
          components should display their light theme.
        </p>
        <p>
          A context provider is a React component attached to a context object as a property.
          Remember that a context object is created with <code>createContext()</code>.  In my
          example, the context object is <code>ThemeContext</code>.  Context provider's are a
          context object's <code>Provider</code> property.  In my example, the context provider of
          <code>ThemeContext</code> is <code>ThemeContext.Provider</code>.
        </p>
        <p>
          All components that are children of a context provider can subscribe to the value it
          provides.  In my example, the <code>ThemeWithContextCard</code> component subscribes to
          the context with the <code>useContext()</code> hook method (Note: Hooks are a React 16.8
          feature.  If you are using an older version of react, you can use
          <code>Context.Consumer</code> for functional components and <code>this.context</code> for
          ES6 class components)<sup>4</sup>.
        </p>
        <p>
          <code>useContext()</code> takes a context object as an argument and returns the current
          value of the context<sup>5</sup>.  <code>ThemeWithContextCard</code> takes the context
          value and uses it to determine the HTML class attached to the component.  This class is
          what toggles the component between light and dark themes.
        </p>
        <p>
          Although my example is very basic, it begins to show the power of the Context API.
          Context really shines in more complex component hierarchies by removing long chains of
          prop exchanges.
        </p>
      </div>
    </FeaturePage>
  );
};

export default ContextDemo;
