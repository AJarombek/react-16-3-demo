/**
 * Demonstrate how forward refs work.
 * @author Andrew Jarombek
 * @since 1/15/2020
 */

import React, {createRef, useState} from 'react';
import ButtonWrapper from './ButtonWrapper';
import ForwardRefButtonWrapper from './ForwardRefButtonWrapper';
import { AJCodeSnippet } from 'jarombek-react-components';

const ForwardRefSample = () => {
  // Create refs to attach to the custom button wrapper components.
  const buttonWrapperRef = createRef();
  const buttonWrapperForwardRef = createRef();

  // Create hooks which are used to display (render) the value of the refs.
  const [propRef, setPropRef] = useState("");
  const [forwardRef, setForwardRef] = useState("");

  // Action which occurs when the ButtonWrapper component is clicked.
  const buttonWrapperOnClick = () => {
    console.info(buttonWrapperRef.current);
    setPropRef(buttonWrapperRef.current);
  };

  // Action which occurs when the ButtonWrapperForwardRef component is clicked.
  const buttonWrapperForwardRefOnClick = () => {
    console.info(buttonWrapperForwardRef.current);
    buttonWrapperForwardRef.current = buttonWrapperForwardRef.current.toString();
    setForwardRef(buttonWrapperForwardRef);
  };

  return (
    <div className="forward-ref-sample">
      <div className="prop-ref">
        <h3>Ref on Component WITHOUT a Forward Ref</h3>
        <ButtonWrapper
          onClick={() => buttonWrapperOnClick()}
          ref={buttonWrapperRef}>

          No Forward Ref
        </ButtonWrapper>
        <p>{JSON.stringify(propRef)}</p>
      </div>
      <div className="forward-ref">
        <h3>Ref on Component WITH a Forward Ref</h3>
        <ForwardRefButtonWrapper
          onClick={() => buttonWrapperForwardRefOnClick()}
          ref={buttonWrapperForwardRef}>

          Forward Ref
        </ForwardRefButtonWrapper>
        <p>{JSON.stringify(forwardRef)}</p>
      </div>
    </div>
  );
};

export default ForwardRefSample;
