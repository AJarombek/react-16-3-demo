/**
 * Implement a global theme for components using the context API.  This is in contrast with
 * {@link ThemeWithProps.js}, which uses props.
 * @author Andrew Jarombek
 * @since 1/2/2020
 */

import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AJSwitchIcon, AJTextCard } from 'jarombek-react-components';
import classnames from 'classnames';

import green from '../assets/green.png';
import light from '../assets/light.png';

const ThemeContext = createContext('light');

const ThemeWithContext = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={classnames("theme-with-context", `${theme}-theme-with-context`)}>
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

const ThemeWithContextCard = () => {
  const context = useContext(ThemeContext);

  return (
    <div className={classnames('theme-with-context-card', `${context}-theme-with-context-card`)}>
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

export default ThemeWithContext;
