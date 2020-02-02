/**
 * Wrapper around the {@code getDerivedStateFromProps()} demo component.
 * @author Andrew Jarombek
 * @since 1/19/2020
 */

import React, { useState } from 'react';
import DerivedFromProps from './DerivedFromProps';
import { AJContainedButton } from 'jarombek-react-components';

const DerivedFromPropsWrapper = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="derived-from-props-wrapper">
      <p><code>getDerivedStateFromProps()</code> Demonstration</p>
      <AJContainedButton onClick={() => setShow(!show)}>
        {show ? 'Hide Secret Message' : 'Show Secret Message'}
      </AJContainedButton>
      <DerivedFromProps show={show}/>
    </div>
  );
};

export default DerivedFromPropsWrapper;
