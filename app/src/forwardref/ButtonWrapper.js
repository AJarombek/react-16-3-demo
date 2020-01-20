/**
 * Wrapper around a button that doesn't use forward refs.  Used to demonstrate how refs resolve to
 * null when placed on a component without forward refs.
 * @author Andrew Jarombek
 * @since 1/15/2020
 */

import React from 'react';
import PropTypes from 'prop-types';

const ButtonWrapper = (props) => {
  const {children, onClick, ref} = props;

  return (
    <button className="button-wrapper" type="button" onClick={onClick} ref={ref}>
      {children}
    </button>
  );
};

ButtonWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  ref: PropTypes.object
};

export default ButtonWrapper;
