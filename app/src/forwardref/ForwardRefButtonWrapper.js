/**
 * Wrapper around a button that uses forward refs.  Used to demonstrate how refs resolve to
 * the proper DOM element when placed on a component with forward refs.
 * @author Andrew Jarombek
 * @since 1/15/2020
 */

import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';

const ButtonWrapper = forwardRef((props, ref) => {
  const {children, onClick} = props;

  return (
    <button className="button-wrapper" type="button" onClick={onClick} ref={ref}>
      {children}
    </button>
  );
});

ButtonWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  ref: PropTypes.object
};

export default ButtonWrapper;
