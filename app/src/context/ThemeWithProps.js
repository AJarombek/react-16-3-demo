/**
 * Implement a global theme for components using props.  This is in contrast with
 * {@link ThemeWithContext.js}, which uses the context API.
 * @author Andrew Jarombek
 * @since 1/2/2020
 */

import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {AJTextCard, AJSwitchIcon} from 'jarombek-react-components';
import classnames from 'classnames';

import green from '../assets/green.png';
import light from '../assets/light.png';

const ThemeWithProps = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={classnames("theme-with-props", `${theme}-theme-with-props`)}>
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

const ThemeWithPropsCard = ({theme}) => {
  return (
    <div className={classnames('theme-with-props-card', `${theme}-theme-with-props-card`)}>
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

export default ThemeWithProps;
